import React from 'react'
import "./homepage.style.css";

import Mainhome from "../components/mainhome";
import RegistrationBanner from "../components/RegistrationBanner"

function HomePage() {
    return (
        <div className="HomePage ">
           <RegistrationBanner />
            <Mainhome />
           
        </div>
    )
}

export default HomePage
