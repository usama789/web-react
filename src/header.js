import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import {Button} from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
const Header = () => {
    return ( 
        
        
        
        <nav className="header">
            
            <img  className="header-logo" src="//cdn.shopify.com/s/files/1/1033/9361/files/RT_Logo_PNG_-01_426b64ab-58f4-4860-9784-839aa4d3a1fb.png?v=1572420893" alt="logo" />
                <div className="header-search">
                    <input type="text" className="header-Input"placeholder="Search"/>
                    <SearchIcon className="header-SearchIcon"/>
                    <Link to="/cart" className="Productcart">
                    <ShoppingCartIcon />
                    <span className="cart-value">0</span>
                    </Link>
                    <Link className="contact" to="/contact-us">Contactus</Link>
                </div>

               
               
        </nav>
     );
}
 
export default Header;