
import React from 'react';
import './App.css';
import {Button,Navbar,Nav,Form,FormControl ,CardDeck,Card} from 'react-bootstrap';
import {Container,Row,Col, Carousel} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { grey } from '@material-ui/core/colors';
import Footer from './footer';
import Header1 from './header1';
import Header from './header';
import Bar from './navbar';
import {Link} from 'react-router-dom'



const Home = () => {
   
    return ( 
        
    <div className="home">
      <Header1 />
      <Header />
      <br />
      <Navbar className="home_navbar">
                
                <Nav className="mr_auto">
                <Nav.Link ><h5 className="nav_text"><Link to='/products' className="nav_links">Sale</Link></h5></Nav.Link>
                <Nav.Link ><h5 className="nav_text"><Link to='/products' className="nav_links">Trousers</Link></h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text"><Link to='/products' className="nav_links">Winters</Link></h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text"> Shirts</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text">Suits</h5></Nav.Link>
                <Nav.Link href="#pricing"><h5 className="nav_text">Polos</h5></Nav.Link>

                </Nav>
                
               
            </Navbar>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/1033/9361/files/WEB-BANNER-Route_36bd6357-4516-45f6-8438-2f563caa782b.jpg?v=1606713743"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/1033/9361/files/WEB-BANNER-Route_shirts_494d182e-004f-405e-a2d3-496722fdc925.jpg?v=1606713387"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/1033/9361/files/WEB-BANNER-2_979e8fc1-f4f8-432a-9762-c289c8ff3874.jpg?v=1606713908"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel> 
           
     
              
             
       <Container>
       <Row>
       <Col><img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1608671517/formal_jhiumo.png"  alt="img1" /></Col>
       
       <Col> <img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1608671521/casual_tdwjo4.png" alt="img2"/></Col>
       
       </Row>
       <Row>
       <Col><img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1608671522/accessories_qwofvy.png"className="accessories" alt="img3"/></Col>
       <Col xs={5}><img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1608673154/tehwar_v2fj2w.png"className="tehwar" alt="img4"/></Col>
      
       </Row>
       </Container>
       <br/>
       <br/>
       <br/>
        <div className="fp" >
            <h4 >
                Featured Products
            </h4>
        </div>
       <br/>
       <br/>
    
            
    <CardDeck>
    <Card>
        <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/1033/9361/products/JKS2902-3_1024x1024.jpg?v=1606115074" className="feature_img"/>
        <Card.Body>
        <Card.Title>RT Leather Jackets</Card.Title>
        <Card.Text>
        

        </Card.Text>
        </Card.Body>
        
    </Card>
    <Card>
        <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/1033/9361/products/JKA01-BK_1024x1024.jpg?v=1608362427" className="feature_img" />
        <Card.Body>
        <Card.Title>RT Parashoot S/L IMP JKA01-BK</Card.Title>
        <Card.Text>
            
        </Card.Text>
        </Card.Body>
       
    </Card>
    <Card>
        <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/1033/9361/products/JKF16-GR_1024x1024.jpg?v=1605785696" className="feature_img"/>
        <Card.Body>
        <Card.Title>RT Parashoot S/L IMP JKA01-BK</Card.Title>
        <Card.Text>
           
        </Card.Text>
        </Card.Body>
        
    </Card>
    </CardDeck>
    <br />
    <Footer />
       
    
    </div> 
     );
}
 
export default Home;