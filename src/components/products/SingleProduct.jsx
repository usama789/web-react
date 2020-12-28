import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";
import userService from '../../services/UserService';
import '../../App.css';
import Header from "../../header";

// const handleNewProductClick = (props) => {
//   const { product, onDelete, history } = props;
//   console.log(props);
//   console.log();
  
// };


const SingleProduct = (props) => {
 const [cart,setCart]=React.useState([]);
  const { product, onDelete, history } = props;
  const navigateTo =()=> props.history.push('/cart');
  const addToCart=()=>{
    console.log("we are in cart");
  setCart([...cart,product]);
  
  }
  return (
   
    <Grid item xs={4} className="prod__grid">
      
       
      <img src={product.imageUrl} className="setimg"/>
      <h4>{product.Name}</h4>
      <div className="row">
      <span className="originalprice">Rs:{product.Price} </span>
      <h5 className="sale">  155</h5>
      </div>
      {userService.isLoggedIn() && (
        <>
      <Button
      onClick={()=>{
        addToCart(product)
      }}
    
      >Add to cart</Button>{" "}
      </>
      )}
      <hr />
    </Grid>
    
  );
};

export default SingleProduct;
