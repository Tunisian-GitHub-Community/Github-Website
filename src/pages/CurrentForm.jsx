import React from "react";
import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useGetEvent from "../hooks/db/useGetEvent";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CurrentForm = () => {
  const sliderRef = React.useRef(null);
  const goTo = (e, idx) => {
    e.preventDefault();
    sliderRef.current.slickGoTo(idx);
  };
  const onSubmit = (formData) => {
    console.log(formData);
    setformDone(true);
    sliderRef.current.slickGoTo(1);
  };
  const [formDone, setformDone] = React.useState(false);
  const { data, isFetching } = useGetEvent();
  const { handleSubmit, register } = useForm();

  if (isFetching) return <Spinner />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="my-20 h-4/6 w-5/6 mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <Slider {...settings} ref={sliderRef}>
        <div className="p-10 flex">
          <div>
            <h1 className="font-bold text-4xl mb-3">{data.intro.title}</h1>
            <p className="font-medium text-lg mb-5">{data.intro.description}</p>
            <hr className="border-gray-900 dark:border-gray-100" />
            <div className="flex justify-center p-3">
              <button
                onClick={(e) => {
                  goTo(e, 1);
                }}
                class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
              >
                Start
              </button>
            </div>
          </div>
        </div>
        {formDone ? (
          <div className="p-10 flex">
            <div>
              <h1 className="font-bold text-4xl mb-3">{data.outro.title}</h1>
              <p className="font-medium text-lg mb-5">
                {data.outro.description}
              </p>
              <hr className="border-gray-900 dark:border-gray-100" />
            </div>
          </div>
        ) : (
          <div>
            {data.questions.map((question, idx) => {
              return (
                <div className="p-5" key={idx}>
                  <h1 className="text-lg font-extrabold">
                    {question.title}
                    {question.required ? " *" : ""}
                  </h1>
                  <h2 className="text-lg">{question.description || ""}</h2>
                  <div className="mt-1 flex shadow-md">
                    <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      autoComplete="off"
                      {...register(question.id, {
                        required: question.required,
                      })}
                      className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
                      name={question.id}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center p-10">
              <button
                type="submit"
                class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </Slider>
    </form>
  );
};

export default React.memo(CurrentForm);

/*
   <div>
            <img src="/assets/header.png" alt="header" width="35%" />
          </div>
*/
