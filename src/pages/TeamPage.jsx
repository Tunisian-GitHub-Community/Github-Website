import React from 'react';
import HowToJoin from '../components/HowToJoin';
import Team from '../components/Team';
import TeamData from './TeamPage.data';
import useFetchMembers from "../hooks/organization/useFetchMembers";


export const TeamPage = () => {
  const { isLoading, error, data } = useFetchMembers();
  console.log(data);
  return (
    <div data-test="TeamPage" className="teampage ">
      <Team team={TeamData} isLoading={isLoading} error={error} />
      <HowToJoin />
    </div>
  );
}

export default TeamPage;
