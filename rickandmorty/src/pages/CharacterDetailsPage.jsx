import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

function CharacterDetailsPage() {
    const { id } = useParams()
    const [char, setChar] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setChar(res.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={char.image} />
                <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default CharacterDetailsPage