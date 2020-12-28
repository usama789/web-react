import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";


const UpdateProduct = (props) => {
  const [Name, setName] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [ProductCode, setCode] = React.useState("");
  const [Size, setSize] = React.useState("");
  const [Quantity, setQuantity] = React.useState(0);
  const [Availability, setAvail] = React.useState("");

  const [imageUrl, setimg] = React.useState("");
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.Name);
      setPrice(data.Price);
      setCode(data.ProductCode);
      setSize(data.Size);
      setQuantity(data.Quantity);
      setAvail(data.Availability);
      setimg(data.imageUrl);
    });
  }, []);
  return (
    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Product</h1>
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
          label="image Url"
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
              .updateProduct(id, { Name, Price,ProductCode,Quantity,Size,Availability,imageUrl })
              .then((data) => {
                console.log(data);
                props.history.push("/admin/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
    
  );
};

export default UpdateProduct;
