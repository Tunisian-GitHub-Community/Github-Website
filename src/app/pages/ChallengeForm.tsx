/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Spinner from '../components/Spinner';
import useGetChallenge from '../hooks/db/useGetChallenge';

export const ChallengeForm = ({ history }) => {
  const { data = {}, isLoading } = useGetChallenge();
  if (isLoading) return <Spinner />;
  if (!data.open)
    throw new Error('Sorry, this form is closed for the moment. 😞');

  return (
    <iframe
      src={data.link}
      width="100%"
      height="190%"
      frameBorder="0"
      // marginHeight="0"
      //   marginWidth="0"
      scrolling=""
    >
      Loading…
    </iframe>
  );
};

export default ChallengeForm;
