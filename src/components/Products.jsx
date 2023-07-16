import { useGetProductsQuery } from '../slices/productsApiSlice';
import ProductTab from './ProductTab';
import './Products.css';

const Products = () => {

  const { data, isLoading, error } = useGetProductsQuery({});

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className='products_section'>
        <h1 className="products_heading">OUR PRODUCTS</h1>
        <div className='products_list'>
          {data.products.map((product) => (
            <ProductTab key={product._id} product={product} />
          ))}
        </div>
    </section>
  )
}
export default Products