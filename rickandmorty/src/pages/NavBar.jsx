import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/favorite-characters">Favorites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar