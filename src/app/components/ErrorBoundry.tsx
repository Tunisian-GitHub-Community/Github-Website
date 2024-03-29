import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
      err: '',
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true, err: error.message };
  }

  componentDidCatch(error, info) {
    console.log(this.state.err);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="Error">
          <div className="bg-gray-800 flex items-center p-5 overflow-hidden relative ">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-gray-200 shadow-xl p-10 lg:p-20 text-gray-900 relative md:flex items-center text-center md:text-left">
              <div className="w-full md:w-1/2">
                <div className="mb-10 md:mb-20 text-gray-600 font-base">
                  <h1 className="font-black uppercase text-3xl lg:text-5xl text-gradient bg-gradient-to-r from-blue-500 to-blue-600 mb-10 ">
                    oopsie !
                  </h1>
                  <p className="font-medium text-lg mb-5">
                    {this.state || 'Something Wrong Happened!'}
                  </p>
                </div>
                <div className="mb-20 md:mb-0">
                  <a
                    className="py-2 px-4 bg-blue-600 text-gray-50 font-semibold border border-blue-600 rounded-lg   hover:text-blue-600 hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                    href="/"
                  >
                    Go Home
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <img className="octo" src="./assets/error.png" alt="octocat" />
              </div>
            </div>
            <div className="w-64 md:w-96 h-96 md:h-full bg-gray-900 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
