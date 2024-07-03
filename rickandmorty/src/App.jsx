import { useState } from 'react'
import { Outlet } from "react-router-dom"
import './App.css'
import NavBar from './pages/NavBar'

function App() {
    const [favorites, setFavorites] = useState([])

    return (
        <div>
            <NavBar />
            <div id="main">
                <div id="mainContainer">
                    <Outlet context={{ favorites, setFavorites }} />
                </div>
            </div>
        </div>
    )
}

export default App
