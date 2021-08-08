/* eslint-disable react/no-array-index-key */
import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import { postContactData } from "../firebase";

export const ContactUsPage = () => {
  const [formDone, setFormDone] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  React.useEffect(() => {
    // adding typeform's javascript to index
    const link = document.createElement("link");
    link.src =
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    link.rel = "stylesheet";
    link.async = true;
    return () => {
      link.remove();
    };
  }, []);
  const mutation = useMutation((data) => postContactData(data));
  const onSubmit = (data) => {
    setFormDone(true);
    mutation.mutate(data);
  };

  return (
    <div className="bg-dark white:bg-gray-900">
      {formDone ? (
        <div className="my-20 p-10 max-w-xl mx-auto shadow-md bg-gray-100 text-center animate__animated animate__bounceIn">
          <p className="font-medium text-lg mb-5">
            We'll get back to you shortly.
          </p>
          <img src="./assets/done.png" alt="" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          className="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <input type="hidden" name="redirect" className="redirect" />
          <div className="mb-10">
            <h1 className="font-bold text-4xl mb-3">Get in touch</h1>
            <p className="font-medium text-lg mb-5">Send us a quick message.</p>
            <hr className="border-gray-900 dark:border-gray-100" />
          </div>
          <div className="mb-5">
            <label className="text-lg flex justify-between items-end">
              <span>Message</span>
              {errors.message && (
                <span className="text-xs text-red-500">Required</span>
              )}
            </label>

            <textarea
              maxLength="50"
              cols="30"
              rows="10"
              name="message"
              {...register("message", { required: true })}
              className="shadow-md mt-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
            ></textarea>
          </div>
          <div className="mb-5">
            <label className="text-lg flex justify-between items-end">
              <span>Name</span>
              {errors.name && (
                <span className="text-xs text-red-500">Required</span>
              )}
            </label>
            <div className="mt-1 flex shadow-md">
              <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
                <i className="fas fa-user"></i>
              </span>

              <input
                type="text"
                autoComplete="off"
                className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
                name="name"
                {...register("name", { required: true })}
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="text-lg flex justify-between items-end">
              <span>Email</span>
              {errors.mail && (
                <span className="text-xs text-red-500">Required</span>
              )}
            </label>
            <div className="mt-1 flex shadow-md">
              <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
                <i className="fas fa-envelope"></i>
              </span>

              <input
                type="email"
                autoComplete="off"
                className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUsPage;
