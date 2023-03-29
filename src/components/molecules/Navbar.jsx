import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Logo from "../img/logo.png";
import { 
  Link
   } from 'react-router-dom';

import "./NavBar.css";

function CollapsibleExample() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="no logo" width="100" height="100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-item' path to ="/">Home</Link>
            <Link className='nav-item' path to ="/about" >About</Link>
            
            
           
          </Nav>
          <Nav>
            <Link className ='nav-item' path to ="/signin">Signin</Link>
            <Link className ='nav-item' path to ="/signup">Signup</Link>
            <Link className ='nav-item' path to ="/cart">
            <FontAwesomeIcon icon={faCartShopping} />Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;