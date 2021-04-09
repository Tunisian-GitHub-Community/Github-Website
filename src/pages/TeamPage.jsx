import React from 'react';
import HowToJoin from '../components/HowToJoin';
import Team from '../components/Team';
import TeamData from './TeamPage.data';

function TeamPage() {
  return (
    <div className="teampage ">
      <Team teams={TeamData} />
      <HowToJoin />
    </div>
  );
}

export default TeamPage;
