import React, { useState } from 'react';
import './SignInAndRegister.css';
import email_icon from '../assets/email_icon.svg'
import password_icon from '../assets/password_icon.svg'
import login_img from '../assets/login_img.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

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
            <h1>HELLO AGAIN</h1>
            <h2>WELCOME BACK</h2>
            <form className="login_and_register_form">
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
                    <button>LOGIN</button>
                </div>
            </form>
            <p>New Customer? <Link to="/register">Register</Link></p>
        </div>
    </main>
  )
}
export default SignIn