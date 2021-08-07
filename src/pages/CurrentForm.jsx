import React from "react";
import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";

import useGetEvent from "../hooks/db/useGetEvent";
import SocialMedia from "../components/SocialMedia";

export const CurrentForm = () => {
  const [formDone, setformDone] = React.useState(false);
  const { data, isFetching } = useGetEvent();
  if (isFetching) return <Spinner />;
  return (
    <div className="animate__animated animate__fadeIn my-20 h-4/6 w-5/6 mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <img src="/assets/octo.png" alt="octocat" className="flying-octo" />
      {!formDone ? (
        <div className="p-10 flex flex-column animate__animated animate__fadeIn">
          <div>
            <div className="d-flex">
              <h1 className="font-bold text-4xl mb-3">{data.intro.title}</h1>
              <p className="font-medium text-lg mb-5">
                {data.intro.description}
              </p>
            </div>
            <hr className="border-gray-900 dark:border-gray-100" />
            <div className="flex justify-center p-3">
              <button
                onClick={(e) => {
                  setformDone(!formDone);
                }}
                class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
              >
                Register
              </button>
            </div>
          </div>
          <SocialMedia />
        </div>
      ) : (
        <div
          className="animate__animated animate__fadeIn animate__delay-1s"
          style={{ width: "100%", height: "100%" }}
        >
          <iframe
            src={data.form}
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      )}
    </div>
  );
};

export default React.memo(CurrentForm);
