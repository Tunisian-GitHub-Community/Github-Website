import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectChallengeData } from '../redux/challenge/challenge.selector';

function FormPage({ challenge }) {
    React.useEffect(() => {
        // adding typeform's javascript to index
        const script = document.createElement("script");
        script.src = "https://embed.typeform.com/embed.js";
        script.type = 'text/javascript';
        script.async = true;
        console.log(challenge);
    }, [challenge])
    let render = <div>sorry</div>;
    if (challenge.isOpen) render = <iframe title='challenge' id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src={challenge.formLink}></iframe>
    if (challenge.reviewTime) render = <iframe title='challenge' id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src={challenge.formLink}></iframe>

    return (
        <div className="form">
            {
                render
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    challenge: selectChallengeData
});

export default connect(mapStateToProps)(FormPage);

