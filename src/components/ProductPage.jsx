import './ProductPage.css';
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import {
  useGetProductDetailsQuery,
} from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";
import quantity_decrease from "../assets/quantity_decrease.svg";
import quantity_increase from "../assets/quantity_increase.svg";
import { BASE_URL } from '../constants';
import ReviewTab from './ReviewTab';
import getStars from '../utils/getStars';

const ProductPage = () => {

  const { id: productId } = useParams();

  const [selectedIndex, setSelectedIndex] = useState(() => 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const userInfo = useSelector((state) => state.auth?.userInfo);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  if(isLoading) {
    return <Loader className='center_aligned_loader' />
  }

  if(!product) {
    navigate('/')
  }

  const stars = getStars(product?.rating)

  return (
    <div>
      <main className="product_page_container">
        <section className="product_details_container">
          <div className='product_left_side_container'>
            <div className="product_image_container">
              <img src={`${BASE_URL}${product?.image[selectedIndex]}`} alt={product?.name} />
            </div>
            <div className='other_images_container'>
              {product?.image?.map((otherImages, index) => {
                if(index === selectedIndex) {
                  return;
                }
                return <img src={`${BASE_URL}${otherImages}`} alt={product?.name} className='other_product_images' onClick={() => setSelectedIndex(index)} />
              })}
            </div>
          </div>
          <div className="product_right_side_container">
            <h1>{product?.name}</h1>
            <p>
              {product?.description}
            </p>
            <div className="product_page_rating_container">
              <div className="star_rating">{stars}</div>
              <p>{product?.numReviews}</p>
            </div>
            <h3 className="product_price product_page_price">${product.price}</h3>
            {product.countInStock === 0 ? <p className='out_of_stock_text'>This product is out of stock!</p> :
            <div className="product_page_quantity_selector">
                <img alt="Quantity Decrease" src={quantity_decrease} style={{opacity: qty === 1 ? '0.4' : '1' }} onClick={() => qty !== 1 && setQty(prev => prev-1)}/>
                <p>{qty}</p>
                <img alt="Quantity Increase" src={quantity_increase} style={{opacity: product.countInStock === qty ? '0.4' : '1' }} onClick={() => product.countInStock !== qty && setQty(prev => prev+1)}/>
            </div>}
            <button className="product_page_add_to_cart" disabled={product.countInStock === 0} onClick={addToCartHandler}>ADD TO CART</button>
          </div>
        </section>
        <section className='product_page_reviews_section'>
          <h1>
            Reviews
          </h1>
          {product.reviews.length === 0 ? 
          <p className='error_message no_reviews_paragraph'>There are no reviews for this product yet.</p> :
          <div className='reviews_container'>
            {product.reviews.map((review) => {
              return <ReviewTab key={review.createdAt} comment={review.comment} name={review.name} rating={review.rating} createdAt={review.createdAt} />
            })}
          </div>}
        </section>
      </main>
    </div>
  );
};
export default ProductPage;
