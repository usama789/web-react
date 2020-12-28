import React from 'react';
import './header.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import userService from './services/UserService';
import {Link } from 'react-router-dom';
const Header1 = () => {
    return ( 
        <nav className="header-1">
            <div className="social-icons">
            <InstagramIcon className="insta-icon"/>
            <FacebookIcon />
            <YouTubeIcon />
           
            
            </div>

            {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
            <Link to="/login" >
            <div className="header1-link">
                <span>SignIn </span>
               
            </div>
            </Link>
            </Typography>
            <Typography variant="h6">
            <Link to="/register" >
            <div className="header1-link">
                <span> Register </span>
               
            </div>
            </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="sm"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + 
                     userService.getLoggedInUser().role}
          </Button>
        )}
            
          
            
        </nav>
     );
}
 
export default Header1;