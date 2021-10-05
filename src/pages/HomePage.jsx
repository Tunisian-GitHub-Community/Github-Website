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

            <div
                className="px-6 py-6 pattern mb-12 bg-gray-800  md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                <div className="xl:w-0 xl:flex-1">
                    <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                        Attend our monthly events
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                        We will be honoured to have you as our guest in future events
                    </p>
                </div>
                <div className="mt-8 ">
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:bg-purple-400 transition duration-150 ease-in-out">
                            Check past events
                        </button>
                    </div>

                    <p className="text-sm leading-5 mt-1 text-indigo-200">
                        Join our Discord Server <span className={"text-green-500"}>here </span> to attend our future
                        events.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default HomePage;
