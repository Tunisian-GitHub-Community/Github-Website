import React from 'react'
import "./HomePage.style.css";
import ActiviesGrid from "../components/ActiviesGrid";
import ChallengeStatus from "../components/ChallengeStatus";
import Header from "../components/Header";
import cardsData from "./HomePage.data";


function HomePage() {
    return (
        <div className="HomePage ">
            <ChallengeStatus />
            <Header />
            <ActiviesGrid cards={cardsData} />
        </div>
    )
}

export default HomePage
