import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import ProductTab from "./ProductTab";

const AllProducts = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <h1 className="products_heading">OUR PRODUCTS</h1>
      <div className="products_list">
        {data.products.map((product) => (
          <ProductTab key={product._id} product={product} />
        ))}
      </div>
      {pageNumber && pageNumber !== 1 && <button>PREVIOUS</button>}
      {data.length === 20 && <button>NEXT</button>}
    </main>
  );
};
export default AllProducts;
