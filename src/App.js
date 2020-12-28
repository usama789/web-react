import React from 'react';
import Header from './header';
import './App.css';
import {BrowserRouter as Router,Switch,Route ,Redirect} from 'react-router-dom';
import Header1 from './header1';
import Products from './components/products/Products';
import UserLogin from './components/auth/UserLogin';
import Home from './home';
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import UpdateProduct from './admin/products/UpdateProduct';
import NewProduct from './admin/products/NewProduct';
import NotFound from './components/NotFound';
import AdminProducts from './admin/products/AdminProducts';
import admin from './admin';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer, toast } from "react-toastify";
import Checkout from './components/Checkout';
import "react-toastify/dist/ReactToastify.css";
import UserRegister from './components/auth/UserRegister';
import CartShop from './components/CartShop';
import AdminContacts from './admin/products/AdminContacts';
function App() {
  return (

      
    
    <Router>
      <ToastContainer />
    <div className="App">
    
      <Switch>

        <Route path="/cart" component={CartShop}/>
     
        <Route path="/checkout" component={Checkout}/>
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/admin/update/:id" component={UpdateProduct}/>
        <Route path="/admin/contacts" component={AdminContacts} />
       
        <Route path="/admin/products/new" component={NewProduct}/>
        <Route path="/admin/login" component={Login} />
        <Route path="/login" component={UserLogin} />
        <Route path="/admin/register" component={Register} />
        <Route path="/register" component={UserRegister}/>
        <Route path="/admin/products" component={AdminProducts}/>
        <Route path="/admin/home" componenet={LandingPage} />
        <Route path="/admin" component={admin} />
        <Route path="/not-found" component={NotFound} />
        

        <Route path="/" exact component={Home} />
        <Redirect to='/not-found'/>
        
          
        
        
      </Switch>
     
     
    </div>
    </Router>
    
  );
}

export default App;
