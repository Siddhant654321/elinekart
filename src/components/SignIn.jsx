import { useState, useEffect } from "react";
import './SignInAndRegister.css';
import email_icon from '../assets/email_icon.svg'
import password_icon from '../assets/password_icon.svg'
import login_img from '../assets/login_img.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import validator from 'email-validator';

const SignIn = () => {
  
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const userInfo = useSelector(state => state.auth?.userInfo);

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
    } else {
      try {
        const res = await login({ email: formValues.email, password: formValues.password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        console.log(err)
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
            <img src={login_img} alt="Login visual" className="login_and_register_img" />
        </div>
        <div className="login_and_register_right_side">
            <h1>HELLO AGAIN!</h1>
            <h2>WELCOME BACK</h2>
            <form className="login_and_register_form" onSubmit={submitHandler}>
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
                    <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'LOGIN'}</button>
                </div>
            </form>
            <p>New Customer? <Link to="/register">Register</Link></p>
        </div>
    </main>
  )
}
export default SignIn