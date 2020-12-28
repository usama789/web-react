import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
import userService from '../../services/UserService';
const NewProduct = (props) => {
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [ProductCode, setCode] = React.useState("");
  const [Size, setSize] = React.useState("");
  const [Quantity, setQuantity] = React.useState(0);
  const [Availability, setAvail] = React.useState("");

  const [imageUrl, setimg] = React.useState("");


  return (
    <Grid container spacing={3}>
      {userService.isLoggedIn() && (
        <>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Name"
          fullWidth
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Price"
          fullWidth
          value={Price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          label="ProductCode"
          fullWidth
          value={ProductCode}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <TextField
          label="Size"
          fullWidth
          value={Size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <TextField
          label="Availability"
          fullWidth
          value={Availability}
          onChange={(e) => {
            setAvail(e.target.value);
          }}
        />
        <TextField
          label="Quantity"
          fullWidth
          value={Quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <TextField
          label="imageUrl"
          fullWidth
          value={imageUrl}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ Name, Price ,Size,Quantity,Availability,ProductCode,imageUrl})
              .then((data) => {
                console.log(data);
                props.history.push("/admin/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
      </>
      )};
      
    </Grid>
  );
};

export default NewProduct;
