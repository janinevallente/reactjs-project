import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    <div className='navBar'>
        <div className= 'navlink'>
            <Navbar className ="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">GamingHub</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className = 'link ' to ="/">Home</NavLink>
                <NavLink className = 'link ' to ="/login">Login</NavLink>
                <NavLink className = 'link ' to ="/registration">Register</NavLink>
            </Nav>
            </Container>
        </Navbar>
        </div>
    </div>
  )
}

export default Navi