import React from 'react';
import ActiviesGrid from '../components/ActiviesGrid';
import ChallengeStatus from '../components/ChallengeStatus';
import Header from '../components/Header';
import cardsData from './HomePage.data';
import Modal from '../components/Modal';
export const HomePage = () => (
  <div data-test="HomePage" className="HomePage ">
    <ChallengeStatus />
    <Header />
    <Modal />
    <ActiviesGrid cards={cardsData} />
  </div>
);


export default HomePage;
