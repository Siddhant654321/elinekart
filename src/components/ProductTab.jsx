import { BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'
import getStars from '../utils/getStars'
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductTab = ({ product }) => {

  const { 
    name, 
    image, 
    rating, 
    numReviews, 
    price,
    countInStock,
    _id
  } = product

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stars = getStars(rating);
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    navigate("/cart");
  };
  
  return (
    <div className="product_tab">
      <img className="product_img" src={`${BASE_URL}${image}`} alt={name} onClick={() => navigate(`product/${_id}`)} />
      <div className='product_tab_flex'>
        <h3 className="product_title" onClick={() => navigate(`product/${_id}`)}>{name}</h3>
        <button className='add_to_cart_btn' disabled={product.countInStock === 0} onClick={addToCartHandler}>+</button>
      </div>
      <div className='star_rating'>
        {stars} <p>{numReviews}</p>
      </div>
      <h3 className="product_price">${price}</h3>
    </div>
  )
}
export default ProductTab