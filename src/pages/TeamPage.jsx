import React from 'react';
import HowToJoin from '../components/HowToJoin';
import Team from '../components/Team';
import TeamData from './TeamPage.data';


export const TeamPage = () => (
  <div data-test="TeamPage" className="teampage ">
    <Team teams={TeamData} />
    <HowToJoin />
  </div>
);

export default TeamPage;
