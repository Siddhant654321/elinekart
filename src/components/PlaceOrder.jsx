import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import ProgressContainer from "./ProgressContainer";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const navigate = useNavigate();
  let total = 0;

  const cart = useSelector((state) => state?.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if(error) {
      toast.error(error.data.message)
    }
  }, [error])

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

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
                <span className="place_order_right_side_bold">
                  ${total}
                </span>{" "}
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
                <span className="place_order_right_side_bold">
                  ${total}
                </span>{" "}
              </p>
            </div>
            <button className="checkout_btn place_order_btn" onClick={placeOrderHandler}>{isLoading ? 'Loading...' : 'PLACE ORDER'}</button>
          </div>
        )}
      </div>
    </main>
  );
};
export default PlaceOrder;
