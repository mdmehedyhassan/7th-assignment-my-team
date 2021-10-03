import React from 'react';
import './Players.css';

const Players = (props) => {
    const {name, country, img, salary, position} = props.player;
    return (
        <div className="player-cart h-100 text-primary">
            <img className="rounded-circle" src={img} alt="" />
            <h2 className="text-danger bg-warning">{name}</h2>
            <p>Country: {country}</p>
            <p>Position: {position}</p>
            <h4>Salary: {salary}</h4>
            <button onClick={()=> props.handlePlayers(props.player)} className="btn btn-success">Add Players</button>
        </div>
    );
};

export default Players;