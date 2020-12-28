import React from "react";
import SingleProduct from "./SingleProduct";
import '../../App.css';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "../../services/ProductsService";
import Header from "../../header";
import Header1 from "../../header1";
import Bar from "../../navbar";
import Footer from "../../footer";
import Cart from "./Cart";

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  
  
  const getData = () => {
   productService.getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  console.log("Inside Products Component");
  return (
    <div>
      <Header1 />
      <Header />
      <br/>
      <Bar />
      <br/>
      <h4 className="happysale">Happy Sale Day</h4>
    
        <br/>
        <br/>
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </Grid>
      )}
      <Footer />
    </div>
  );
};

export default Products;
