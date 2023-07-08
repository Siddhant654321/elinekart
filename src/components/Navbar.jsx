import './Navbar.css';
import search_icon from '../assets/search_icon.svg'; 

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='navbar_title_container'>
            <p className='navbar_title'>ELINEKART</p>
        </div>
        <form className='navbar_search_container'>
            <input type='text' placeholder='Search Products' className='navbar_search_input' />
            <button type='submit' className='navbar_search_button'><img src={search_icon} height={34} width={34} /></button>
        </form>
        <div className='navbar_links_container'>
            <a className='navbar_links' href='#'>CART</a>
            <a className='navbar_links' href='#'>SIGN IN</a>
            <a className='navbar_links' href='#'>REGISTER</a>
        </div>
    </div>
  )
}
export default Navbar