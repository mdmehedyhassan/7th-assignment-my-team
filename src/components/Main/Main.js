import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData.json'
import Players from '../Players/Players';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [cartPlayer, setCartPlayer] = useState([]);
    useEffect(() => {
        setPlayers(fakeData);
    });
    const handlePlayers = (player) => {
        const newPlayers = [...cartPlayer, player];
        setCartPlayer(newPlayers);
    };

    const totalBudget = cartPlayer.reduce((total, sum) => total + sum.salary, 0);
    return (
        <div>
            <Header></Header>
            <div className="row d-flex flex-md-row-reverse bd-highlight">
            <div className="col-md-4">
                    <h1 className="text-danger">Total Players {cartPlayer.length}</h1>
                    <table>
                        <tr className="bg-warning">
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

                        <tr className="bg-warning">
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
        </div>
    );
};

export default Main;