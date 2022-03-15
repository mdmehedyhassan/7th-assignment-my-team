import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData.json'
import Players from '../Players/Players';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [cartPlayer, setCartPlayer] = useState([]);
    useEffect(() => {
        setPlayers(fakeData);
    },[]);
    const handlePlayers = (player) => {
        let item = cartPlayer.indexOf(player);
        if (item === -1) {
            const newPlayers = [...cartPlayer, player];
            setCartPlayer(newPlayers);
        }
        if (item !== -1) {
            alert("This player already have your team!");
        };
    };

    const totalBudget = cartPlayer.reduce((total, sum) => total + sum.salary, 0);
    return (
        <div>
            <Header></Header>
            <div className="row d-flex flex-md-row-reverse bd-highlight">
                <div className="col-md-4">
                    <h1 className="text-danger">Total Players {cartPlayer.length}</h1>
                    <table>
                        <tr className="bg-warning text-dark">
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>
                        {
                            cartPlayer.map(player => (
                                <tr>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>${player.salary}</td>
                                </tr>
                            ))
                        }

                        <tr className="bg-danger text-light">
                            <td>Total Budget: </td>
                            <td>---</td>
                            <td>${totalBudget}</td>
                        </tr>
                    </table>

                </div>
                <div className="col-md-8 ">
                    <div className="row">
                        {
                            players.map(player => (
                                <div className="col-md-6 mb-3 text-center">
                                    <Players handlePlayers={handlePlayers} key={player.id} player={player}></Players>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
<a href="https://github.com/mdmehedyhassan/7th-assignment-my-team" className="btn btn-outline-info">Code Link</a>
        </div>
    );
};

export default Main;
