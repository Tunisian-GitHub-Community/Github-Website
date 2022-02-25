import React from 'react';

import { ChallengeService } from 'app/services/challenge.service';
import Spinner from '../components/Spinner';

export const ChallengeForm = () => {
  const { data, isLoading } = new ChallengeService().useGetDoc();
  if (isLoading) return <Spinner />;
  if (!data?.open)
    throw new Error('Sorry, this form is closed for the moment. 😞');

  return (
    <iframe
      src={data.link}
      title="Challenge Form"
      width="100%"
      height="190%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      scrolling=""
    >
      Loading…
    </iframe>
  );
};

export default ChallengeForm;
