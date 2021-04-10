import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectChallengeData } from '../redux/challenge/challenge.selector';

function FormPage({ challenge }) {
  React.useEffect(() => {
    // adding typeform's javascript to index
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/embed.js';
    script.type = 'text/javascript';
    script.async = true;
  }, []);

  if (challenge.isOpen) return <iframe title="challenge" id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src={challenge.formLink} />
  if (challenge.reviewTime) return <iframe title="challenge" id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src={challenge.formLink} />
  return (
    <div className="form">
      <div>sorry</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  challenge: selectChallengeData,
});
export default connect(mapStateToProps)(FormPage);
