import React from 'react'
import "./homepage.style.css";
import Mainhome from "../components/mainhome";
import RegistrationBanner from "../components/RegistrationBanner";
import Header from "../components/Header";



function HomePage() {
    return (
        <div className="HomePage ">
            <RegistrationBanner />
            <Header />
            <Mainhome />
        </div>
    )
}

export default HomePage
