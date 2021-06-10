import React, { useState } from "react";
import { Link } from "react-router-dom";
function Modal() {
  const [modal, setModal] = useState(true);

  return (
    <div className={modal ? " block" : "hidden"}>
      <div
        className="min-w-screen  h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
        style={{ background: "rgba(0,0,0,.2)" }}
        id="modal-id"
      >
        <div className="relative mx-auto my-auto rounded-xl shadow-lg  bg-gray-800 ">
          <div className="mx-auto container  px-4">
            <div className=" flex justify-center">
              <div className="w-full md:w-11/12 xl:w-10/12 bg-gray-800 px-5 py-4 xl:px-12 xl:py-16">
                <div className=" absolute top-0 right-0   ">
                  <button
                    onClick={() => setModal(!modal)}
                    type="button"
                    className="left h-13 w-13  flex px-3 mx-2 py-1 mt-5  rounded-md hover:bg-green-500 focus:outline-none  "
                  >
                    <svg
                      className="h-8 w-8  text-white"
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
                <div>
                  <div className="flex flex-wrap items-center flex-row ">
                    <div className="w-2/3  pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 ">
                      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:w-10/12 text-white font-black  md:text-left text-center  ">
                        Save your spot in <br /> our monthly talk
                      </h1>

                      <Link to="/currentform">
                        <button className="mt-5 lg:mt-12 py-3 lg:py-4 px-4  lg:px-6 bg-green-500 font-bold text-gray-900 rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90">
                          Save your spot
                        </button>
                      </Link>
                    </div>
                    <div className="w-1/3 ">
                      <div className="flex flex-col items-center justify-center">
                        <img src="/assets/cto.png" alt="cto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
