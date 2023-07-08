import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className='navbar_title_container'>
            <p className='navbar_title'>ELINEKART</p>
        </div>
        <div className='navbar_search_container'>

        </div>
        <div className='navbar_links_container'>
            <a className='navbar_links' href='#'>CART</a>
            <a className='navbar_links' href='#'>SIGN IN</a>
            <a className='navbar_links' href='#'>REGISTER</a>
        </div>
    </div>
  )
}
export default Navbar