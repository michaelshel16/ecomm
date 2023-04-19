import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Logo from "../img/logo.png";
import { 
  Link
   } from 'react-router-dom';

import "./NavBar.css";


function CollapsibleExample({cartList}) {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
           <Link className='nav-brand' to="/">
          <img src={Logo} alt="no logo" width="100" height="100"/>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-item'  to ="/">Home</Link>
            <Link className='nav-item'  to ="/about" >About</Link>
            
            
           
          </Nav>
          <Nav>
            <Link className ='nav-item'  to ="/signin">Signin</Link>
            <Link className ='nav-item' to ="/signup">Signup</Link>
            <Link className ='nav-item' to ="/cart">
            <FontAwesomeIcon icon={faCartShopping} />Cart<Badge pill bg="secondary">{cartList.length}</Badge> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;