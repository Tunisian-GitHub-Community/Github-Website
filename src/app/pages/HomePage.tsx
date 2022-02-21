import React from 'react';

import ActiviesGrid from '../components/ActiviesGrid';
import ChallengeStatus from '../components/ChallengeStatus';
import Header from '../components/Header';
import cardsData from './data/HomePage.data';
// import Modal from '../components/Modal'; // promote an event
export const HomePage = () => {
  return (
    <div data-test="HomePage" className="HomePage ">
      <ChallengeStatus />
      <Header />
      <ActiviesGrid cards={cardsData} />
    </div>
  );
};

export default HomePage;
