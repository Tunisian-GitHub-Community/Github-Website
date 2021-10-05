/* eslint-disable react/no-array-index-key */
import React from "react";
import {useMutation} from "react-query";
import {useForm} from "react-hook-form";

import {postContactData} from "../firebase";

export const ContactUsPage = () => {
  const [formDone, setFormDone] = React.useState(false);
  const {
    register,
    formState: {errors},
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
          <section className="bg-gray-100 pt-12 pb-7 lg:pb-8 lg:pt-16 xl:pt-28">
            <div className="container mx-auto px-5">
              <div className="grid gap-6 lg:gap-10 xl:grid-cols-3 mb-7 lg:mb-14">
                <div className="flex flex-col justify-between space-y-10 xl:space-y-0">
                  <div className="space-y-2 lg:space-y-4">
                    <h2 className="text-2xl font-black sm:text-3xl">Get in touch</h2>
                    <p className="w-full sm:w-1/2 xl:w-80 text-gray-600 md:text-lg">Ask us anything , we're open to any
                      collaboration and questions .</p>

                  </div>
                </div>
                <div className="xl:col-span-2">
                  <form className="w-full bg-white p-5 rounded-xl shadow md:p-8" onSubmit={handleSubmit(onSubmit)}
                        method="post">
                    <input type="hidden" name="remember" value="true"/>
                    <div className="flex flex-col space-y-5">
                      <input type="text"
                             {...register("name", {required: true})}
                             className="w-full px-6 py-3.5 rounded-lg border border-gray-200 shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-400 md:text-lg"
                             placeholder="Full name"/>
                      <input type="email"
                             {...register("email", {
                               required: true,
                               pattern: /\S+@\S+\.\S+/,
                             })}
                             className="w-full px-6 py-3.5 rounded-lg border border-gray-200 shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-400 md:text-lg"
                             placeholder="Email"/>

                      <textarea name="" id="" cols="30" rows="3"
                                {...register("message", {required: true})}
                                className="w-full px-6 py-3.5 rounded-lg border border-gray-200 shadow-sm appearance-none resize-none focus:outline-none focus:ring focus:border-blue-400 md:text-lg"
                                placeholder="Message"/>
                      <div>
                        <button type="submit"
                                className="w-full px-8 py-3.5 transition duration-300 bg-green-500 hover:bg-green-600 shadow text-white font-semibold rounded-lg sm:w-auto">
                          Send
                          message
                        </button>
                      </div>

                    </div>

                  </form>
                </div>
              </div>


            </div>
          </section>

      )}

    </div>

  );

};
export default ContactUsPage;


