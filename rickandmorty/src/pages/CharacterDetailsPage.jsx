import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
        <div>
            <h1>{char.name}</h1>
            <h2>{}</h2>
        </div>
    )
}

export default CharacterDetailsPage