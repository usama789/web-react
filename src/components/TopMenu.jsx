import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import userService from '../services/UserService';
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/admin"  className={classes.link} >
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/admin/products"  className={classes.link} >
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/admin/products/new"  className={classes.link} >
            New Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/admin/contacts"  className={classes.link} >
           Contacts
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/admin/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/admin/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + 
                      userService.getLoggedInUser().role}
          </Button>
        )}
       
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
