import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from './Loader';
import ProductTab from './ProductTab';
import './Products.css';
import arrow_icon from "../assets/arrow_icon.svg";

const Products = () => {

  const { data, isLoading, error } = useGetProductsQuery({});

  if(isLoading) {
    return <Loader />
  }

  return (
    <section className='products_section'>
        <h1 className="products_heading">OUR PRODUCTS</h1>
        <div className='products_list'>
          {data.products.map((product) => (
            <ProductTab key={product._id} product={product} />
          ))}
        </div>
        {data.products.length >= 20 && <div className='more_products_btn_div'>
          <Link className="explore_btn_link_tag" to="/products">
            <button className="explore_btn">
              More Products <img src={arrow_icon} alt="" />
            </button>
          </Link>
        </div>}
    </section>
  )
}
export default Products