import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Header1 from './header1';

import './login.css';
const register = () => {
    return ( 
        <div>
            
            <Header1 />
        
        <div className="loginPage">
            
            
            <Link>
            <img  className="login-logo" src="//cdn.shopify.com/s/files/1/1033/9361/files/RT_Logo_PNG_-01_426b64ab-58f4-4860-9784-839aa4d3a1fb.png?v=1572420893" alt="logo" />
            </Link>
            <div className="login-Container">
                <h1>Create Customer Account</h1>
                <form>
                    <h4>Name</h4>
                    <input type="text" placeholder="enter Name"/>
                    <h4>Email</h4>
                    <input type="email" placeholder="enter email"/>
                    <h4>Password</h4>
                    <input type="password" placeholder="enter password"/>
                    <button type="submit" className="sign-inbutton">Sign Up</button>
                </form>
                
                <p>By signing in you will agree to all terms and condition</p>
                
            </div>
            <br/>
            

            

            <Footer />
        </div>
        </div>
     );
}
 
export default register;