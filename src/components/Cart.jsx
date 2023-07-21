import './Cart.css'

const Cart = () => {
  return (
    <div className='cart_page'>
        <section>
            <ul className='cart_headers'>
                <li>PRODUCT</li>
                <li>PRICE</li>
                <li>QUANTITY</li>
                <li>REMOVE</li>
            </ul>
        </section>
    </div>
  )
}
export default Cart