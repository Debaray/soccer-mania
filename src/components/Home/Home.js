import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import League from '../League/League';
import './Home.css';
const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues));
    }, [])
    const sportName = `Soccer`;
    const soccerLeagues = leagues.filter(league => league.strSport === sportName);

    return (
        <div className="body">
            <div className="leagues-style">
                <div className="row">
                    <div className="main-banner col-sm-12">
                        <h1 className="banner-text-design Montserrat-font">Soccer Mania</h1>
                    </div>
                </div>
                <div className="mt-5 container leagues-style">
                    <div className="row text-center justify-content-center">
                        {
                            soccerLeagues.map(league => <League key={league.idLeague} league={league}></League>)
                        }
                    </div>
                </div>
                <p className="footer"><small>All rights reserved. ©Debashis Ray,2021.</small></p>
            </div>
        </div>
    );
};
export default Home;