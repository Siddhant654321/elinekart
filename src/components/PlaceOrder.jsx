import { useLocation, useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import ProgressContainer from "./ProgressContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PlaceOrder = () => {
  const location = useLocation();
  const { orderId } = location.state || {};

  const {
    data: order,
    refetch,
    isLoading,
    isError,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const navigate = useNavigate();
  let total = 0;

  const cart = useSelector((state) => state?.cart);

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPayPalClientIdQuery();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        dispatch(clearCartItems());
        toast.success("Order is paid");
        navigate("/profile");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrderPaypal(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.totalPrice,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  }

  if (!order) {
    return <Loader className="center_aligned_loader" />;
  }

  return (
    <main>
      <ProgressContainer />
      <div className="place_order_container">
        <div className="place_order_left_side">
          <h1>Shipping</h1>
          <p>
            <span className="place_order_left_side_bold">Address: </span>
            {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
            {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
          </p>
          <h1>Payment Method</h1>
          <p>
            <span className="place_order_left_side_bold">Method: </span>
            {cart.paymentMethod}
          </p>
          <h1>Order Items</h1>=
          {cart.cartItems.length === 0 ? (
            <p style={{ color: "red" }}>Your cart is empty</p>
          ) : (
            <div>
              {cart.cartItems.map((item, index) => {
                total += item.price * item.qty;
                return (
                  <div className="place_order_items_container">
                    <p>{item.name}</p>
                    <p>
                      {item.qty} &times; ${item.price} ={" "}
                      <span className="place_order_left_side_bold">
                        ${item.qty * item.price}
                      </span>{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {cart.cartItems.length !== 0 && (
          <div className="place_order_right_side">
            <h1>ORDER SUMMARY</h1>
            <div className="place_order_right_items">
              <p>Items</p>
              <p>
                <span className="place_order_right_side_bold">${total}</span>{" "}
              </p>
            </div>
            <div className="place_order_right_items">
              <p>Shipping</p>
              <p>
                <span className="place_order_right_side_bold">
                  ${cart.shippingPrice}
                </span>{" "}
              </p>
            </div>
            <div className="place_order_right_items">
              <p>Total</p>
              <p>
                <span className="place_order_right_side_bold">${total}</span>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="place_order_payment_section">
        {loadingPay && <Loader />}

        {isPending ? (
          <Loader className="center_aligned_loader" />
        ) : (
          <div>
            <PayPalButtons
              createOrder={createOrderPaypal}
              onApprove={onApprove}
              onError={onError}
            ></PayPalButtons>
          </div>
        )}
      </div>
    </main>
  );
};
export default PlaceOrder;
