import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { selectChallengeData } from "../redux/challenge/challenge.selector";

export const FormPage = ({ challenge }) => {
  React.useEffect(() => {
    // adding typeform's javascript to index
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.type = "text/javascript";
    script.async = true;
  }, []);

  if (challenge.isOpen)
    return (
      <iframe
        data-test="FormPage"
        title="challenge"
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src={challenge.formLink}
      />
    );
};
FormPage.propTypes = {
  challenge: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    formLink: PropTypes.string,
  }),
};

FormPage.defaultProps = {
  challenge: {
    isOpen: false,
  },
};

const mapStateToProps = createStructuredSelector({
  challenge: selectChallengeData,
});
export default connect(mapStateToProps)(FormPage);
