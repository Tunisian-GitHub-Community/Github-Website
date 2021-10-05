import React from "react";

import ActiviesGrid from "../components/goals";
import Header from "../components/Header";
import {Team} from "../components/Team";
import teamData from "./data/TeamPage.data";
import goalsData from "./data/Goals.data";
import ContactUsPage from "./ContactUsPage";
// import Modal from '../components/Modal'; // promote an event
export const HomePage = () => {
    return (
        <div data-test="HomePage" className="HomePage font-sans antialiased bg-gray-50 text-gray-900 ">

            <Header/>
            <ActiviesGrid goals={goalsData}/>
            <Team team={teamData}/>
            <ContactUsPage/>

        </div>
    );
};

export default HomePage;
