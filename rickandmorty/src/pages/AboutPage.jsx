import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AboutPage() {
    const [episodes, setEpisodes] = useState([])
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.all([
                axios.get("https://rickandmortyapi.com/api/character"),
                axios.get("https://rickandmortyapi.com/api/episode"),
                axios.get("https://rickandmortyapi.com/api/location")
            ])
            .then(axios.spread((resChar, resEp, resLoc) => {
                setCharacters(resChar.data)
                setEpisodes(resEp.data)
                setLocations(resLoc.data)
            }))
        }
        fetchData()
    },[])

    return (
        <div>
            <h1>About page</h1>
            <p>Episode count: {episodes?.info?.count}</p>
            <p>Character count: {characters?.info?.count}</p>
            <p>Location count: {locations?.info?.count}</p>
        </div>
    )
}

export default AboutPage