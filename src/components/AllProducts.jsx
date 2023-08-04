import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import ProductTab from "./ProductTab";
import './AllProducts.css';

const AllProducts = () => {
  const { pageNumber = '1', keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if(data.products.length === 0){
    return (
      <p className="error_message no_products_found_err">No Products Found! <Link to="/products">Keep Shopping</Link></p>
    )
  }

  return (
    <main>
      <h1 className="products_heading">OUR PRODUCTS</h1>
      <div className="products_list">
        {data.products.map((product) => (
          <ProductTab key={product._id} product={product} />
        ))}
      </div>
      {pageNumber && pageNumber !== '1' && <button className="explore_btn" style={{margin: '0px auto 25px auto'}} onClick={() => navigate(`/products/page/${Number.parseInt(pageNumber)-1}`)}>PREVIOUS</button>}
      {data.products.length === 12 && <button className="explore_btn" style={{margin: '0px auto 25px auto'}} onClick={() => navigate(`/products/page/${Number.parseInt(pageNumber)+1}`)}>NEXT</button>}
    </main>
  );
};
export default AllProducts;
