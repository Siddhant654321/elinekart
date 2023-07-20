import { BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'
import getStars from '../utils/getStars'

const ProductTab = ({ product }) => {

  const { 
    name, 
    image, 
    rating, 
    numReviews, 
    price,
    _id
  } = product

  const navigation = useNavigate();

  const stars = getStars(rating);
  
  
  return (
    <div className="product_tab" onClick={() => navigation(`product/${_id}`)}>
      <img className="product_img" src={`${BASE_URL}${image}`} alt={name} />
      <div className='product_tab_flex'>
        <h3 className="product_title">{name}</h3>
        <button className='add_to_cart_btn'>+</button>
      </div>
      <div className='star_rating'>
        {stars} <p>{numReviews}</p>
      </div>
      <h3 className="product_price">{price}</h3>
    </div>
  )
}
export default ProductTab