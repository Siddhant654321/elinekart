import './Navbar.css';
import search_icon from '../assets/search_icon.svg'; 
import close_icon from '../assets/close_icon.svg';
import hamburger_icon from '../assets/hamburger_icon.svg';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(() => false)

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar_container">
        <div className="navbar_title_container">
          <Link to="/" className="navbar_title">
            ELINEKART
          </Link>
        </div>
        {!showMenu ? (
          <img
            src={hamburger_icon}
            className="hamburger_icon"
            onClick={() => setShowMenu(() => true)}
          />
        ) : (
          <img
            src={close_icon}
            className="close_icon"
            onClick={() => setShowMenu(() => false)}
          />
        )}
        <form className={`navbar_search_container ${showMenu && "show_menu"}`}>
          <input
            type="text"
            placeholder="Search Products"
            className="navbar_search_input"
          />
          <button type="submit" className="navbar_search_button">
            <img src={search_icon} height={34} width={34} />
          </button>
        </form>
        <div className={`navbar_links_container ${showMenu && "show_menu"}`}>
          <Link className="navbar_links" to="/cart">
            CART
          </Link>
          {userInfo ? (
            <>
              <Link className="navbar_links" to="/profile">
                PROFILE
              </Link>
              <div style={{ alignSelf: "center" }} onClick={logoutHandler}>
                <svg
                  className='navbar_logout_icon'
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 12L13 12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
            </>
          ) : (
            <>
              <Link className="navbar_links" to="/signin">
                SIGN IN
              </Link>
              <Link className="navbar_links" to="/register">
                REGISTER
              </Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar