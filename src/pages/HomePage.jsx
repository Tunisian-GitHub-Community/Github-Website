import React from 'react';
import ActiviesGrid from '../components/ActiviesGrid';
import ChallengeStatus from '../components/ChallengeStatus';
import Header from '../components/Header';
import cardsData from './HomePage.data';
import MeetTheTeam from '../components/MeetTheTeam';

function HomePage() {
  return (
    <div className="HomePage ">
      <ChallengeStatus />
      <Header />
      <ActiviesGrid cards={cardsData} />
      <MeetTheTeam />
    </div>
  );
}

export default HomePage;
