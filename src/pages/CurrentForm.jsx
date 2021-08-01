import React from "react";
import Spinner from "../components/Spinner";
import useGetEvent from "../hooks/db/useGetEvent";

export const CurrentForm = ({ event, history }) => {
  const { data = "", isFetching } = useGetEvent();

  React.useEffect(() => {
    // adding typeform's javascript to index
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.type = "text/javascript";
    script.async = true;
    return () => {
      script.remove();
    };
  }, []);
  if (isFetching) return <Spinner />;
  return (
    <iframe
      data-test="FormPage"
      title="challenge"
      id="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      src={data.link}
    />
  );
};

export default React.memo(CurrentForm);
