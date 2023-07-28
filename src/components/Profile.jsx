import "./Profile.css";
import email_icon from "../assets/email_icon.svg";
import password_icon from "../assets/password_icon.svg";
import name_icon from "../assets/name_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useProfileMutation } from "../slices/usersApiSlice";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import Loader from "./Loader";
import yes_icon from '../assets/yes_icon.svg';
import no_icon from '../assets/no_icon.svg';


const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo, userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <main className="profile_container">
      <div className="profile_left_side">
        <h1>USER PROFILE</h1>
        <form className="user_profile_form" onSubmit={submitHandler}>
          <div>
            <img src={name_icon} alt="" />
            <input
              placeholder="Full Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <img src={email_icon} alt="" />
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <img src={password_icon} alt="" />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <img src={password_icon} alt="" />
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="user_profile_btn continue_btn">
            {loadingUpdateProfile ? "LOADING" : "UPDATE"}
          </button>
        </form>
      </div>
      <div className="profile_right_side">
        <h1>MY ORDERS</h1>
        {isLoading ? (
          <Loader className="center_aligned_loader" />
        ) : error ? (
          <p className="error_message">{error?.data?.message || error.error}</p>
        ) : orders.length === 0 ? (
          <p className="error_message">You have no orders at the moment</p>
        ) : (
          <>
            {orders.map((order) => (
              <div className="order_item_container">
                <h1>{`${order.orderItems[0].name}`} {order.orderItems.length > 1 && `(+${order.orderItems.length - 1} items)`}</h1>
                <div className="order_item_details">
                  <div>
                    <h5 className="order_item_header">TOTAL</h5>
                    <p className="order_item_data">${order.totalPrice}</p>
                  </div>
                  <div>
                    <h5 className="order_item_header">DATE</h5>
                    <p className="order_item_data">{order.createdAt.substring(0, 10)}</p>
                  </div>
                  <div>
                    <h5 className="order_item_header">PAID</h5>
                    {order.isPaid ? <img src={yes_icon} alt="Yes" /> : <img src={no_icon} alt="No" />}
                  </div>
                  <div>
                    <h5 className="order_item_header">DELIVERED</h5>
                    {order.isDelivered ? <img src={yes_icon} alt="Yes" /> : <img src={no_icon} alt="No" />}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
};
export default Profile;
