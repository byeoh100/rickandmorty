import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import './App.css'

function App() {
    return (
        <div>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/about-us">About us</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/characters">Characters</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>
    )
}

export default App
