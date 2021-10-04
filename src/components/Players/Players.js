import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Players.css';

const Players = (props) => {
    const {name, country, img, salary, position} = props.player;
    return (
        <div className="player-cart h-100">
            <img className="rounded-circle" src={img} alt="" />
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Position: {position}</p>
            <h4>Salary: {salary}</h4>
            <button onClick={()=> props.handlePlayers(props.player)} className="btn btn-info">Add Players <FontAwesomeIcon icon={faSignInAlt} /></button>
        </div>
    );
};

export default Players;