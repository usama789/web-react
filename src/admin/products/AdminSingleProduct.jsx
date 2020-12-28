import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router";
import userService from '../../services/UserService';
const AdminSingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    
    <Grid item xs={4}>
      
      <h4>
      <img src={product.imageUrl} className="img_set"/>
        <div>
        
        {product.Name}{" "}
        
        </div>
        <p>{product.Price}</p>{""}
        {userService.isAdmin() && (
        <>
        
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("navigate to update");
            history.push("update/" + product._id);
          }}
        >
          Edit
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .deleteProduct(product._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </Button>
       
       </>
        )}
      </h4>
     
      <hr />
    </Grid>
  );
};

export default withRouter(AdminSingleProduct);
