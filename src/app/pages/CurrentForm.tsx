import React from 'react';
import IframeResizer from 'iframe-resizer-react';

import Spinner from '../components/Spinner';
import { EventService } from 'app/services/event.service';

export const CurrentForm = () => {
  const { data, isLoading } = new EventService().useGetDoc();

  if (isLoading) return <Spinner />;
  if (!data?.open)
    throw new Error('Sorry, this form is closed for the moment. 😞');
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      src={data.link}
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

export default React.memo(CurrentForm);
