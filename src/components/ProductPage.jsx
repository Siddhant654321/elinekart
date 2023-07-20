import './ProductPage.css';
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import {
  useGetProductDetailsQuery,
} from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";
import full_star from "../assets/full_star.svg";
import half_star from "../assets/half_star.svg";
import empty_star from "../assets/empty_star.svg";
import quantity_decrease from "../assets/quantity_decrease.svg";
import quantity_increase from "../assets/quantity_increase.svg";
import { BASE_URL } from '../constants';

const ProductPage = () => {

  const { id: productId } = useParams();

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

  const stars = [];

  const fullStars = Math.floor(product?.rating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img src={full_star} alt="full star" />);
  }

  const halfStar = product?.rating % 1 !== 0;
  if (halfStar) {
    stars.push(<img src={half_star} alt="half star" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img src={empty_star} alt="empty star" />);
  }

  return (
    <div>
      <main className="product_page_container">
        <section className="product_details_container">
          <div className="product_image_container">
            <img src={`${BASE_URL}${product?.image}`} alt={product?.name} />
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
            <h3 className="product_price product_page_price">$38.00</h3>
            {product.countInStock === 0 ? <p className='out_of_stock_text'>This product is out of stock!</p> :
            <div className="product_page_quantity_selector">
                <img alt="Quantity Decrease" src={quantity_decrease} style={{opacity: qty === 1 ? '0.4' : '1' }} onClick={() => qty !== 1 && setQty(prev => prev-1)}/>
                <p>{qty}</p>
                <img alt="Quantity Increase" src={quantity_increase} style={{opacity: product.countInStock === qty ? '0.4' : '1' }} onClick={() => product.countInStock !== qty && setQty(prev => prev+1)}/>
            </div>}
            <button className="product_page_add_to_cart" disabled={product.countInStock === 0} onClick={addToCartHandler}>ADD TO CART</button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ProductPage;
