import { BASE_URL } from "../constants";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import trash from '../assets/trash.svg'
import { useNavigate, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import quantity_decrease from "../assets/quantity_decrease.svg";
import quantity_increase from "../assets/quantity_increase.svg";

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state?.cart?.cartItems);

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = async () => {
    navigate("/signin?redirect=/shipping");
  };

  let total = 0;

  if (cartItems.length === 0) {
    return <>
      <p className="no-items-cart">You don't have any items in your cart. <Link to="/products">Keep Shopping</Link></p>
    </>
  }
  
  return (
    <div className="cart_page">
      <section>
        <ul className="cart_headers">
          <li>PRODUCT</li>
          <li>PRICE</li>
          <li>QUANTITY</li>
          <li>REMOVE</li>
        </ul>
        {cartItems.map((product) => {
          return <div key={product._id} className="cart_product_container">
            <div>
                <img className="cart_product_image" src={`${BASE_URL}${product.image[0]}`} alt={product.name} />
                <h2 className="cart_product_title">{product.name}</h2>
            </div>
            <p className="cart_product_price">${product.price}</p>
            <div className="cart_page_quantity_selector">
              <img alt="Quantity Decrease" src={quantity_decrease} style={{opacity: product.qty === 1 ? '0.4' : '1' }} onClick={() => product.qty !== 1 && addToCartHandler(product, product.qty-1)}/>
              <p className="cart_product_qty">{product.qty}</p>
              <img alt="Quantity Increase" src={quantity_increase} style={{opacity: product.countInStock === product.qty ? '0.4' : '1' }} onClick={() => product.countInStock !== product.qty && addToCartHandler(product, product.qty+1)}/>
            </div>
            <div>
              <img src={trash} alt="Remove" width={32} height={32} className="remove_btn" onClick={() => removeFromCartHandler(product._id)} />
            </div>
          </div>;
        })}
      </section>
      <section className="cart_bottom_section">
        <ul className="cart_headers">
          <li>ORDER SUMMARY</li>
        </ul>
        {cartItems.map((product) => {
          const price = product.qty * product.price;
          total += price
          return <div key={product._id} className="cart_summary_product">
            <p>{product.name}</p>
            <p>${price}</p>
          </div>
        })}
        <div className="cart_total_container">
          <p>TOTAL</p>
          <p className="total_price">${total}</p>
        </div>
        <button className="checkout_btn" onClick={checkoutHandler}>CHECKOUT</button>
      </section>
    </div>
  );
};
export default Cart;
