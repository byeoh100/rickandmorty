import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <Nav>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar