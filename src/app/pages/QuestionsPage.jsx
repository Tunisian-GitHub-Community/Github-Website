import React from "react";

import Spinner from "../components/Spinner";
import useGetEvent from "../hooks/db/useGetEvent";

function QuestionsPage() {
  const { data, isLoading } = useGetEvent();

  if (isLoading) return <Spinner />;
  if (!data.open)
    throw new Error("Sorry, this page is closed for the moment. 😞");
  return (
    <iframe
      src={data.slido}
      height="100%"
      width="100%"
      frameBorder="0"
      title="Slido"
      style={{
        filter: " grayscale(90%) invert(95%)",
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
