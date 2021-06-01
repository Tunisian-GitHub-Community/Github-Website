/* eslint-disable react/no-array-index-key */
import React from "react";

function post(path, params, names, method = "post") {
  const form = document.createElement("form");
  form.method = method;
  form.action = path;
  let i = 0;
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = names[i];
      hiddenField.value = params[key];
      form.appendChild(hiddenField);
      i++;
    }
  }

  document.body.appendChild(form);
  form.submit();
}

export const ContactUsPage = () => {
  const [formData, setformData] = React.useState({
    message: "",
    name: "",
    mail: "",
  });

  const afterSubmission = (e) => {
    e.preventDefault();
    console.log(formData);
    const route =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJTZ5AHBB3y9Xmkw0EoHme8NDMgczt74Zlzg-xin0awhFYGg/formResponse";
    const names = ["entry.1035355711", "entry.1663598263", "entry.1604566192"];
    post(route, formData, names);
  };
  return (
    <div className="bg-dark white:bg-gray-900">
      <form
        onSubmit={afterSubmission}
        method="post"
        class="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <input type="hidden" name="redirect" className="redirect" />
        <div className="mb-10">
          <h1 className="font-bold text-4xl mb-3">Get in touch</h1>
          <p className="font-medium text-lg mb-5">
            Send us a quick message and we'll get back to you shortly.
          </p>
          <hr className="border-gray-900 dark:border-gray-100" />
        </div>
        <div className="mb-5">
          <label
            for="message"
            className="text-lg flex justify-between items-end"
          >
            <span>Message</span>
            <span class="text-xs text-red-500">Required</span>
          </label>
          <textarea
            name="entry.1035355711"
            id="message"
            maxLength="10"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={(e) =>
              setformData({ ...formData, message: e.target.value })
            }
            class="shadow-md mt-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
          ></textarea>
        </div>
        <div className="mb-5">
          <label for="name" className="text-lg flex justify-between items-end">
            <span>Name</span>
            <span class="text-xs text-red-500 ">Required</span>
          </label>
          <div class="mt-1 flex shadow-md">
            <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
              <i class="fas fa-user"></i>
            </span>
            <input
              type="text"
              name="entry.1663598263"
              class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-5">
          <label for="email" className="text-lg flex justify-between items-end">
            <span>Email</span>
            <span class="text-xs text-red-500">Required</span>
          </label>
          <div className="mt-1 flex shadow-md">
            <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
              <i class="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              name="entry.1604566192"
              className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
              value={formData.mail}
              onChange={(e) =>
                setformData({ ...formData, mail: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"
          >
            <i class="fas fa-check"></i> Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsPage;
