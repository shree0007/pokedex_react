import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>

            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3> <br></br>
            <Link to={props.name}>See more</Link>



        </div>
    );
};

export default Card;