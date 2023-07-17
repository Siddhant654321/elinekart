import { useState, useEffect } from "react";
import './SignInAndRegister.css';
import email_icon from '../assets/email_icon.svg'
import password_icon from '../assets/password_icon.svg'
import name_icon from '../assets/name_icon.svg'
import register_img from '../assets/register_img.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import validator from 'email-validator';

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const userInfo = useSelector((state) => state.auth?.userInfo);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validator.validate(formValues.email)) {
      toast.error("Please enter a valid email address");
      return;
    } else if (formValues.password.length < 6){
      toast.error("Password should be at least 6 characters long");
      return;
    } else if (formValues.name.length <= 2){
      toast.error("Name should be at least 3 characters long");
      return;
    } else {
      try {
        const res = await register({ name: formValues.name, email: formValues.email, password: formValues.password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <main className="login_and_register_container">
        <div className="login_and_register_left_side">
            <img src={register_img} alt="Register visual" className="login_and_register_img" />
        </div>
        <div className="login_and_register_right_side">
            <h1>HELLO!</h1>
            <h2>Sign Up to Get Started</h2>
            <form className="login_and_register_form" onSubmit={submitHandler}>
                <div>
                    <img src={name_icon} alt="" />
                    <input 
                      placeholder="Full Name" 
                      type="text" 
                      name="name" 
                      value={formValues.name} 
                      onChange={handleInputChange} 
                    />
                </div>
                <div>
                    <img src={email_icon} alt="" />
                    <input 
                      placeholder="Email Address" 
                      type="email" 
                      name="email" 
                      value={formValues.email} 
                      onChange={handleInputChange} 
                    />
                </div>
                <div>
                    <img src={password_icon} alt="" />
                    <input 
                      placeholder="Password" 
                      type="password" 
                      name="password" 
                      value={formValues.password} 
                      onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'REGISTER'}</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
    </main>
  )
}
export default Register