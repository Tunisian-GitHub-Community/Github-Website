import React from "react";
import { NavLink } from "react-router-dom";

import useGetChallenge from "../hooks/db/useGetChallenge";

const ChallengeStatus = () => {
  const hide = () => {
    document.getElementById("hide").style.display = "none";
  };

  const { data = false } = useGetChallenge();
  const status = {
    text: "This month's challenge is closed.",
    color: "bg-red-600",
  };
  if (data.open) {
    status.text = "This month's challenge is open.";
    status.color = "bg-green-600";
  }

  return (
    <div className="RegistrationBanner">
      <div className={status.color} id="hide">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-white-600">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:inline mr-1">{status.text}</span>
                {data.open ? (
                  <NavLink
                    to="/challenge"
                    type="button"
                    className="focus:outline-none text-white text-sm py-2.5 px-3 rounded-md bg-gray-800 hover:bg-white hover:text-green-800 hover:shadow-lg"
                  >
                    Join
                  </NavLink>
                ) : null}
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                onClick={hide}
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChallengeStatus);
