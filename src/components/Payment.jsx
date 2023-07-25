import "./Payment.css";
import ProgressContainer from "./ProgressContainer";
import Lottie from "lottie-react";
import payment_lottie from "../assets/payment_lottie.json";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { savePaymentMethod } from "../slices/cartSlice";

const Payment = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shippingAddress = useSelector((state) => state?.cart?.shippingAddress);

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod("PayPal"));
    navigate("/placeorder");
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
          CONTINUE
        </button>
      </div>
    </main>
  );
};
export default Payment;
