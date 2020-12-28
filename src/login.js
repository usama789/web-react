import {React,useState} from 'react';
import { Link,props } from 'react-router-dom';
import userService from "./services/UserService";
import Footer from './footer';

import Header1 from './header1';
import { toast } from "react-toastify";

import './App.css';
const UserLogin = (props) => {
    const [email,setEmail]=useState("");
    const [password,setPassword] =useState("");
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
                    <h4>Email</h4>
                    <input type="email" placeholder="enter email"
                    
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    />{" "}
                    <h4>Password</h4>
                    <input type="password" placeholder="enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    
                    />{" "}
                    <button className="sign-inbutton"
                    
                    onClick={(e) => {
                        userService
                          .login(email, password)
                          .then((data) => {
                            console.log(data);
                            window.location.href = "/";
                          })
                          .catch((err) => {
                            console.log(err);
                           
                          });
                      }}
                    
                    >Sign In</button>
                </form>
                
                <p>By signing in you will agree to all terms and condition</p>
                <button className="create-acc">
                    <Link to="/Register">
                    Create Your Acount
                    </Link>
                    </button>
            </div>
            <br/>
            

            

            <Footer />
        </div>
        </div>
     );
}
 
export default UserLogin;