import React from 'react';

import Spinner from '../components/Spinner';
import { EventService } from 'app/services/event.service';

function QuestionsPage() {
  const { data, isLoading } = new EventService().useGetDoc();

  if (isLoading) return <Spinner />;
  if (!data?.open || !data?.slido)
    throw new Error('Sorry, this page is closed for the moment. 😞');
  return (
    <iframe
      src={data.slido}
      height="100%"
      width="100%"
      frameBorder="0"
      title="Slido"
      style={{
        filter: ' grayscale(90%) invert(95%)',
      }}
    ></iframe>
  );
}

export default QuestionsPage;

/*
      style={{
        filter: " grayscale(90%)",
      }}
*/
