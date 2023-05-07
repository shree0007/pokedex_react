import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './AboutPoke.css';


const AboutPoke = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [pokeData, setPokeData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.aboutpoke}`)
            .then((response) => {
                setPokeData(response.data);
                setIsLoading(false);

            });

    }, []);


    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className='aboutpoke'>

            <h2>{pokeData.name}</h2>
            <img id='singlepoke'
                src={pokeData.sprites?.other.dream_world.front_default}
                alt={pokeData.name}
            />
            <div className='description'>
                <h3>Description:</h3>
                <p>Id: {pokeData.id}</p>
                <p>Weight: {pokeData.weight}</p>
                <p>Height: {pokeData.height}</p>
                <p>Base experience: {pokeData.base_experience}</p>
            </div>

            <button onClick={() => navigate(-1)}>Back</button>
        </div>

    );

};

export default AboutPoke;

