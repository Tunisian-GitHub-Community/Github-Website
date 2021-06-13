import React from "react";

import useGetChallenge from "../hooks/db/useGetChallenge";

export const FormPage = ({ history }) => {
  const { data = false, isLoading } = useGetChallenge();
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
  if (isLoading) return <Spinner />;
  if (!data.open) history.push("/404");
  if (data.open)
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

export default FormPage;
