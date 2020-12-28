import React from 'react';
import {Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Bar = () => {
    return ( 
        
        <div>
         <Navbar className="home_navbar">
                
                <Nav className="mr_auto">
                <Nav.Link href="#home"><h5 className="nav_text">Sale</h5></Nav.Link>
                <Nav.Link href="#features" ><h5 className="nav_text">Trousers</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text">Winters</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text"> Shirts</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text">Suits</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text">Polos</h5></Nav.Link>

                </Nav>
                
               
            </Navbar>
        
       
    
    </div>
        
     );
}
 
export default Bar;