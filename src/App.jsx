/* eslint-disable import/no-named-as-default */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/HomePage';

import ErrorBoundry from './components/ErrorBoundry';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import IconToOrg from './components/IconToOrg';
import Footer from './components/Footer';


// chuck files and laod only what is needed
const Teampage = lazy(() => import('./pages/TeamPage'));
const GuidelinesPage = lazy(() => import('./pages/GuidelinesPage'));
const FormPage = lazy(() => import('./pages/FormPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const WhereToGoPage = lazy(() => import('./pages/WhereToGoPage'));

export const App = () => (
  <Suspense fallback={<Spinner />}>
    <ErrorBoundry>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/team" component={Teampage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/guidelines" component={GuidelinesPage} />
          <Route exact path="/form" component={FormPage} />
          <Route path="*" component={WhereToGoPage} />
        </Switch>
        <IconToOrg />
        <Footer />
      </BrowserRouter>
    </ErrorBoundry>
  </Suspense>)

export default App;
