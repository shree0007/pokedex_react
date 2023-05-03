import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './UI/Card';
import Header from './Header';
import './ListOfPoke.css';

const ListOfPoke = () => {
    const [pokeData, setPokeData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then((response) => {
                const fetches = response.data.results.map((poke) => {
                    return axios.get(poke.url).then((response) => response.data);
                });
                Promise.all(fetches).then((response) => {
                    setPokeData(response);
                    setIsLoading(false);
                });
            });

    }, []);

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const searchFilter = pokeData.filter(item => {
        return item.name.includes(searchInput)
    })

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='pokelist'>
            {/* <Header /> */}
            <input placeholder='search pokemon by name' onChange={searchInputHandler} />
            <div className='cards'>
                {searchFilter.map((card) => (
                    <Card
                        key={card.name}
                        name={card.name}
                        image={card.sprites.other['official-artwork'].front_default} />

                ))}

            </div>

        </div>
    );

}
export default ListOfPoke;