import React from "react";
import Spinner from "../components/Spinner";
import useGetChallenge from "../hooks/db/useGetChallenge";

export const ChallengeForm = ({ history }) => {
  const { data = false, isLoading } = useGetChallenge();
  if (isLoading) return <Spinner />;
  if (!data.open)
    throw new Error("Sorry, this form is closed for the moment. 😞");

  return (
    <iframe
      src={data.link}
      width="100%"
      height="190%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling=""
    >
      Loading…
    </iframe>
  );
};

export default ChallengeForm;
