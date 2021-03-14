/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import image from '../../Images/male.png';
import found from '../../Icon/found 1.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag ,faFutbol,faVenusMars,faTwitter} from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [leagues,setLeague] = useState([]);
    useEffect(() =>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues));     
    },[leagueId])
    const twitterUrl = `https://${leagues.map(league =>league.strTwitter)}`;
    const facebookUrl = `https://${leagues.map(league =>league.strFacebook)}`;
    const youtubeUrl = `https://${leagues.map(league =>league.strFacebook)}`;
    return (
        <div className="leagues-style">
            <div className="league-banner col-sm-12">
                <img className="banner-design" src={leagues.map(league =>league.strBanner)} alt=""/>
            </div>
            <div className="mt-5 container leagues-style">
                <div className="league-details row d-flex ">
                    <div className="league-info Montserrat-font col-sm-12 col-md-6 col-lg-6">
                        <h1>{leagues.map(league =>league.strLeague)}</h1>
                        <br/>
                        <h4><img className="image-logo"src={found} alt="male"/> Founded: February 20, 1992</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {leagues.map(league =>league.strCountry)}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sport Type: {leagues.map(league =>league.strSport)}</h4>
                        <h4><FontAwesomeIcon icon={faVenusMars} /> Gender: {leagues.map(league =>league.strGender)}</h4>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center ">
                        <img className="image-design w-75"src={image} alt="male"/>
                    </div>
                </div>
                <div>
                    <br/>
                    <p className="league-details-info">{leagues.map(league =>league.strDescriptionEN)}</p>
                </div>
                <div className=" ml-5 d-flex justify-content-center mr-3">
                    <SocialIcon className="mr-5" url={twitterUrl} network="twitter" target="_blank" />
                    <SocialIcon className="mr-5" url={facebookUrl} network="facebook" target="_blank" />
                    <SocialIcon className="mr-5" url={youtubeUrl} network="youtube" target="_blank" />
                </div>
                <br/>
                <br/>
                <p className="footer"><small>All rights reserved. ©Debashis Ray,2021.</small></p>

            </div>
        </div>
    );
};

export default LeagueDetails;