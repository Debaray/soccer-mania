import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [leagues,setLeague] = useState([]);
    useEffect(() =>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues));
        
    },[leagueId])
    console.log(leagues);
    return (
        <div className="leagues-style">
            <div className="league-banner col-sm-12">
                <img className="banner-design" src={leagues.map(league =>league.strBanner)} alt=""/>
            </div>
            <div className="mt-5 container">
                <div className="row text-center justify-content-center">
                </div>

            </div>
        </div>
    );
};

export default LeagueDetails;