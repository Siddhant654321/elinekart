import "./Navbar.css";
import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Navbar = () => {
  const { keyword: urlKeyword } = useParams();

  const [showMenu, setShowMenu] = useState(false);

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

        <button
          className={`menu_toggle ${showMenu ? "open" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar_links_container ${showMenu ? "show_menu" : ""}`}
        >
          <Link
            className="navbar_links"
            to="/products"
            onClick={() => setShowMenu(false)}
          >
            PRODUCTS
          </Link>
          <Link
            className="navbar_links"
            to="/cart"
            onClick={() => setShowMenu(false)}
          >
            CART
          </Link>
          <Link
            className="navbar_links"
            to="/products"
            onClick={() => setShowMenu(false)}
          >
            CONTACT US
          </Link>
          {userInfo ? (
            <>
              <Link
                className="navbar_links"
                to="/profile"
                onClick={() => setShowMenu(false)}
              >
                PROFILE
              </Link>
              <div className="navbar_logout_wrapper" onClick={logoutHandler}>
                <svg
                  className="navbar_logout_icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12L13 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          ) : (
            <>
              <Link
                className="navbar_links"
                to="/signin"
                onClick={() => setShowMenu(false)}
              >
                SIGN IN
              </Link>
              <Link
                className="navbar_links"
                to="/register"
                onClick={() => setShowMenu(false)}
              >
                REGISTER
              </Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
