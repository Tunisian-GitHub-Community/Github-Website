import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEventData } from "../redux/event/event.selector";

export const CurrentForm = ({ event, history }) => {
  React.useEffect(() => {
    // adding typeform's javascript to index
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.type = "text/javascript";
    script.async = true;
    if (!event.isOpen) history.push("/404");
    return () => {
      script.remove();
    };
  }, []);
  return (
    <iframe
      data-test="FormPage"
      title="challenge"
      id="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      src="https://form.typeform.com/to/sVxFigO6?typeform-medium=embed-snippet"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  event: selectEventData,
});

export default connect(mapStateToProps)(React.memo(CurrentForm));
