import React, { useState } from 'react';
import './SignInAndRegister.css';
import email_icon from '../assets/email_icon.svg'
import password_icon from '../assets/password_icon.svg'
import name_icon from '../assets/name_icon.svg'
import register_img from '../assets/register_img.png'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: ''
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
            <img src={register_img} alt="Register visual" className="login_and_register_img" />
        </div>
        <div className="login_and_register_right_side">
            <h1>HELLO!</h1>
            <h2>Sign Up to Get Started</h2>
            <form className="login_and_register_form">
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
                    <button>REGISTER</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
    </main>
  )
}
export default Register