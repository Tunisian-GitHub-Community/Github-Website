import React from "react";
import HowToJoin from "../components/HowToJoin";
import Team from "../components/Team";

import TeamData from "./TeamPage.data";
import guideLines from "./guideLines.data";

import useFetchMembers from "../hooks/organization/useFetchMembers";

export const TeamPage = () => {
  const { isLoading, error, data } = useFetchMembers();
  // not passing data to components, it's fetching public members only
  return (
    <div data-test="TeamPage" className="teampage ">
      <Team team={TeamData} isLoading={isLoading} error={error} />
      <HowToJoin guideLines={guideLines} />
    </div>
  );
};

export default TeamPage;
