/* eslint-disable import/no-named-as-default */
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from "./Router";
import ErrorBoundry from './components/ErrorBoundry';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import IconToOrg from './components/IconToOrg';
import Footer from './components/Footer';


export const App = () => (
  <Suspense fallback={<Spinner />}>
    <ErrorBoundry>
      <BrowserRouter>
        <Navbar />
        <Router />
        <IconToOrg />
        <Footer />
      </BrowserRouter>
    </ErrorBoundry>
  </Suspense>)

export default App;
