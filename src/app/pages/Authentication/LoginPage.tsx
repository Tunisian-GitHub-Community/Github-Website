import { loginWithEmailAndPassword, postLoginData } from 'app/firebase';
import React from 'react';
import { useForm } from 'react-hook-form';

function LoginPage() {
  const [formDone, setFormDone] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  React.useEffect(() => {
    // adding typeform's javascript to index
    const link = document.createElement('link') as any;

    link.src =
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    link.rel = 'stylesheet';
    link.async = true;
    return () => {
      link.remove();
    };
  }, []);
  const onSubmit = async data => {
    await loginWithEmailAndPassword(data.email, data.password);
    setFormDone(true);
  };

  return (
    <div className="bg-dark white:bg-gray-900">
      {formDone ? (
        <div className="my-20 p-10 max-w-xl mx-auto shadow-md bg-gray-100 text-center animate__animated animate__bounceIn">
          <p className="font-medium text-lg mb-5">Accessing the matrix.</p>
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
            <h1 className="font-bold text-4xl mb-3 text-center">
              Welcome back
            </h1>
            <hr className="border-gray-900 dark:border-gray-100" />
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
                {...register('email', {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                name="email"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="text-lg flex justify-between items-end">
              <span>Password</span>
              {errors.password && (
                <span className="text-xs text-red-500">Required</span>
              )}
            </label>
            <div className="mt-1 flex shadow-md">
              <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100">
                <i className="fas fa-key"></i>
              </span>

              <input
                type="password"
                autoComplete="off"
                className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"
                {...register('password', { required: true })}
                name="password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
