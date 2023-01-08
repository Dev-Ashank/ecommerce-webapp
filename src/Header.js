import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' alt='Logo img' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        
        <div className='header_search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello guest</span>
                <span className='header_optionLineTwo'>Sign in</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div> 
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            
            <div className='header_optionCart'>
                <ShoppingCartIcon/>
                <span className='header_optionLineOne header_cartCount'>0</span>
            </div>         
            
        </div>
    </div>
  )
}

export default Header