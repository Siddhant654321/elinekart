const ProductTab = ({ img, title, price, rating }) => {
  return (
    <div className="product_tab">
      <img className="product_img" src={img} alt={title} />
      <h3 className="product_title">{title}</h3>
      <h3 className="product_price">{price}</h3>
    </div>
  )
}
export default ProductTab