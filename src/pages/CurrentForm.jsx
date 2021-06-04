import React from "react";

export const CurrentForm = () => {
  React.useEffect(() => {
    // adding typeform's javascript to index
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.type = "text/javascript";
    script.async = true;
  }, []);
  return (
    <iframe
      data-test="FormPage"
      title="challenge"
      id="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://form.typeform.com/to/sVxFigO6?typeform-medium=embed-snippet"
    />
  );
};

export default CurrentForm;
