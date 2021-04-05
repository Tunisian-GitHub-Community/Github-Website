import React from 'react'
import "./HomePage.style.css";
import ActiviesGrid from "../components/ActiviesGrid";
import ChallengeStatus from "../components/ChallengeStatus";
import Header from "../components/Header";
import cardsData from "./HomePage.data";
import Meet from '../components/meet';


function HomePage() {
    return (
        <div className="HomePage ">
            <ChallengeStatus />
            <Header />
            <ActiviesGrid cards={cardsData} />
            <Meet/>
            
        </div>
    )
}

export default HomePage
