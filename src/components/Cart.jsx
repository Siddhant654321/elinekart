import { BASE_URL } from "../constants";
import "./Cart.css";
import { useSelector } from "react-redux";
import trash from '../assets/trash.svg'

const Cart = () => {

  const cartItems = useSelector((state) => state?.cart?.cartItems);

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
                <img className="cart_product_image" src={`${BASE_URL}${product.image}`} alt={product.name} />
                <h2 className="cart_product_title">{product.name}</h2>
            </div>
            <p className="cart_product_price">${product.price}</p>
            <p className="cart_product_qty">{product.qty}</p>
            <div>
                <img src={trash} alt="Remove" />
            </div>
          </div>;
        })}
      </section>
    </div>
  );
};
export default Cart;
