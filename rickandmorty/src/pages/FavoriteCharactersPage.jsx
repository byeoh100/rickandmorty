import React, { useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import './FavoriteCharactersPage.css'
import star_filled from '../assets/star_filled.png'

function FavoriteCharactersPage() {
    const [chars, setChars] = useState([])
    const { favorites, setFavorites } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            let req = favorites.map((id) => axios.get(`https://rickandmortyapi.com/api/character/${id}`))
            let res = await Promise.all(req)
            let data = res.map((res) => res.data)
            setChars(data)
        }
        if (favorites.length > 0) {
            fetchData()
        }
    }, [])

    return (
        <>
            <h1>Favorites</h1>
            <div className='favBox'>
                {favorites.length == 0 ?
                    <h2>You have no favorites</h2>
                    : chars.map((char) => (
                        <Card style={{ width: '36rem' }}>
                            <Card.Img variant="top" src={char.image} onClick={() => navigate(`/character-details/${char.id}`)} style={{ cursor: "pointer" }} />
                            <Card.Body>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Card.Title>{char.name}</Card.Title>
                                    <img
                                        onClick={() => {
                                            setFavorites(favorites.filter((id) => id != char.id))
                                            setChars(chars.filter((i) => i.id != char.id))
                                        }}
                                        src={star_filled}
                                        style={{ width: "1rem", height: "1rem", cursor: "pointer" }} />
                                </div>
                            </Card.Body>
                        </Card>))
                }
            </div>
        </>
    )
}

export default FavoriteCharactersPage