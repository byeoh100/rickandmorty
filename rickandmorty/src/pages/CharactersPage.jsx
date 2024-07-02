import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import "./CharactersPage.css"
import { useNavigate } from 'react-router-dom'

function CharactersPage() {
    const [charList, setCharList] = useState([])
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    console.log(charList)

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            setCharList(res.data.results)
        }
        fetchData()
    }, [page])

    const handlePage = (move) => {
        if(move == "prev" && page > 1) {
            setPage(page - 1)
        }
        else if(move == "next") {
            setPage(page + 1)
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
                        <Card.Img variant="top" src={i.image} onClick={() => navigate(`/character-details/${i.id}`)} style={{cursor : "pointer"}}/>
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <button>Add to favorites</button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CharactersPage