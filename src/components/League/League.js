import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const League = (props) => {
    const {idLeague,strLeague,strSport} =props.league;
    const [leagues,setLeague] = useState([]);
    useEffect(() =>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues));
        
    },[idLeague])
    
    return (
            <Card style={{ width: '20rem' }} className="card-design">
                <Card.Img variant="top" src= {leagues.map(league =>league.strLogo)} className="card-image"/>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sports Type : {strSport}
            </Card.Text>
                    <Link to={`/league/${idLeague}`}>
                        <Button className="main-button" variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Link>
                </Card.Body>
            </Card> 
    );
};
export default League;