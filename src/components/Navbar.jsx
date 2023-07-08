import './Navbar.css';
import search_icon from '../assets/search_icon.svg'; 
import close_icon from '../assets/close_icon.svg';
import hamburger_icon from '../assets/hamburger_icon.svg';
import { useState } from 'react';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(() => false)

  return (
    <div className='navbar_container'>
        <div className='navbar_title_container'>
            <p className='navbar_title'>ELINEKART</p>
        </div>
        {!showMenu ? <img src={hamburger_icon} className='hamburger_icon' onClick={() => setShowMenu(() => true)} />
        : <img src={close_icon} className='close_icon' onClick={() => setShowMenu(() => false)} />}
        <form className={`navbar_search_container ${showMenu && 'show_menu'}`}>
            <input type='text' placeholder='Search Products' className='navbar_search_input' />
            <button type='submit' className='navbar_search_button'><img src={search_icon} height={34} width={34} /></button>
        </form>
        <div className={`navbar_links_container ${showMenu && 'show_menu'}`}>
            <a className='navbar_links' href='#'>CART</a>
            <a className='navbar_links' href='#'>SIGN IN</a>
            <a className='navbar_links' href='#'>REGISTER</a>
        </div>
    </div>
  )
}
export default Navbar