import "./Payment.css";
import ProgressContainer from "./ProgressContainer";
import Lottie from "lottie-react";
import payment_lottie from "../assets/payment_lottie.json";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { savePaymentMethod } from "../slices/cartSlice";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";

const Payment = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  const shippingAddress = useSelector((state) => state?.cart?.shippingAddress);

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod("PayPal"));
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
      navigate("/placeorder", { state: { orderId: res._id } });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <main>
      <ProgressContainer />
      <div className="payment_page_container">
        <Lottie
          animationData={payment_lottie}
          loop={true}
          className="payment_animation"
        />
        <button className="continue_btn payment_page_btn" onClick={submitHandler}>
          {isLoading ? "LOADING..." : "CONTINUE"}
        </button>
      </div>
    </main>
  );
};
export default Payment;
