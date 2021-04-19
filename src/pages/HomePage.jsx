import React from 'react';
import ActiviesGrid from '../components/ActiviesGrid';
import ChallengeStatus from '../components/ChallengeStatus';
import Header from '../components/Header';
import cardsData from './HomePage.data';

export const HomePage = () => (
  <div data-test="HomePage" className="HomePage ">
    <ChallengeStatus />
    <Header />
    <ActiviesGrid cards={cardsData} />
  </div>
);


export default HomePage;
