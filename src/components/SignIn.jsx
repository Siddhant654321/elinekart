import './SignIn.css';
import email_icon from '../assets/email_icon.svg'
import password_icon from '../assets/password_icon.svg'
import login_img from '../assets/login_img.png'

const SignIn = () => {
  return (
    <main className="login_container">
        <div className="login_left_side">
            <img src={login_img} className="login_img" />
        </div>
        <div className="login_right_side">
            <h1>HELLO AGAIN</h1>
            <h2>WELCOME BACK</h2>
            <form className="login_form">
                <div>
                    <img src={email_icon} />
                    <input placeholder="Email Address" type="email" />
                </div>
                <div>
                    <img src={password_icon} />
                    <input placeholder="Password" type="password" />
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
            </form>
            <p>New Customer? <a href="#">Register</a></p>
        </div>
    </main>
  )
}
export default SignIn