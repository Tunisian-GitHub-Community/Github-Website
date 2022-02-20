import React from "react";
import IframeResizer from "iframe-resizer-react";

import Spinner from "../components/Spinner";
import useGetEvent from "../hooks/db/useGetEvent";

export const CurrentForm = ({ event, history }) => {
  const { data, isLoading } = useGetEvent();

  if (isLoading) return <Spinner />;
  if (!data.open)
    throw new Error("Sorry, this form is closed for the moment. 😞");
  return (
    <iframe
      src={data.link}
      width="100%"
      height="190%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling=""
    >
      Loading…
    </iframe>
  );
};

export default React.memo(CurrentForm);
