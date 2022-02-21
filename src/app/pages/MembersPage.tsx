import React from 'react';
import HowToJoin from '../components/HowToJoin';
import Team from '../components/Members';

import guideLines from './data/GuideLines.data';

import useFetchMembers from '../hooks/organization/useFetchMembers';

export const MembersPage = () => {
  const { isLoading, error, data } = useFetchMembers();
  // not passing data to components, it's fetching public members only
  return (
    <div data-test="TeamPage" className="teampage ">
      <Team members={data} isLoading={isLoading} error={error} />
      <HowToJoin guideLines={guideLines} />
    </div>
  );
};

export default MembersPage;
