import React from 'react'
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss'

export const MatchSmallCard=({teamName,match})=> {

    if(!match) return null;
    const otherTeam=teamName===match.team1?match.team2:match.team1;
    const otherteamRouter=`/teams/${otherTeam}`
    const isMatchWon=teamName===match.matchWinner;


    return (
         <div className={isMatchWon ?'MatchSmallCard won-card':'MatchSmallCard loss-card'}>
             <spam className="vs"> Vs</spam>
            <h1> <Link to={otherteamRouter}>{otherTeam}</Link></h1>
            <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
           
    )
}
