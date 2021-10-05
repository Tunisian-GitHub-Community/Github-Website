import React from "react";

import ActiviesGrid from "../components/ActiviesGrid";
import Header from "../components/Header";
import cardsData from "./data/HomePage.data";
import {Team} from "../components/Team";
import teamData from "./data/TeamPage.data";
import HowToJoin from "../components/HowToJoin";
import guideLines from "./data/guideLines.data";
// import Modal from '../components/Modal'; // promote an event
export const HomePage = () => {
    return (
        <div data-test="HomePage" className="HomePage font-sans antialiased bg-gray-50 text-gray-900 ">

            <Header/>

            <ActiviesGrid cards={cardsData}/>
            <Team team={teamData}/>
            <HowToJoin guideLines={guideLines}/>
        </div>
    );
};

export default HomePage;
