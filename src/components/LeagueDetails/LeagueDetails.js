import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import image from './male.png';
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
            <div className="mt-5 container leagues-style">
                <div className="league-details row d-flex ">
                    <div className="league-info col-sm-12 col-md-6 col-lg-6">
                        <h1>Premier League</h1>
                        <h4>Founded: February 20, 1992</h4>
                        <h4>Country: England</h4>
                        <h4>Sport Type: Football</h4>
                        <h4>Gender: Male</h4>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 border">
                        <img className="image-design"src={image} alt="male"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LeagueDetails;