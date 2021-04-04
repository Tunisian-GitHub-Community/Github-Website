import React from 'react'
import Team from '../components/Team'
import TeamData from "./TeamPage.data"

function TeamPage() {
    return (
        <div className="teampage ">
     
        <Team teams={TeamData}/>
        </div>
    )
}

export default TeamPage
