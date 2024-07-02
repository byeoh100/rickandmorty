import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import "./CharactersPage.css"
import { useNavigate } from 'react-router-dom'
import star from '../assets/star.png'
import star_filled from '../assets/star_filled.png'

function CharactersPage() {
    const [charList, setCharList] = useState([])
    const [page, setPage] = useState(1)
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()

    console.log(favorites)

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            setCharList(res.data.results)
        }
        fetchData()
    }, [page])

    const handlePage = (move) => {
        if (move == "prev" && page > 1) {
            setPage(page - 1)
        }
        else if (move == "next") {
            setPage(page + 1)
        }
    }

    const handleFavorites = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((i) => i != id))
        }
        else if (favorites.length < 4) {
            setFavorites([...favorites, id])
        }
        else {
            alert("You can only have up to 4 favorites")
        }
    }

    return (
        <div>
            <div className="page">
                <h1>CHARACTERS</h1>
                Page: {page}
                <div>
                    <button onClick={() => handlePage("prev")}>Prev</button>
                    <span>    </span>
                    <button onClick={() => handlePage("next")}>Next</button>
                </div>
            </div>
            <div className="cardBox">
                {charList.map((i, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={i.image} onClick={() => navigate(`/character-details/${i.id}`)} style={{ cursor: "pointer" }} />
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <img
                                onClick={() => handleFavorites(i.id)}
                                src={favorites.includes(i.id) ? star_filled : star}
                                style={{ width: "1rem", height: "1rem", cursor: "pointer" }} />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CharactersPage