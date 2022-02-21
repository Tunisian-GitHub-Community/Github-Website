/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ErrorBoundry from './components/ErrorBoundry';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import IconToOrg from './components/IconToOrg';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
const MembersPage = React.lazy(() => import('./pages/MembersPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const TimeLinePage = React.lazy(() => import('./pages/TimeLinePage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'));
const QuestionsPage = React.lazy(() => import('./pages/QuestionsPage'));
const ChallengeForm = React.lazy(() => import('./pages/ChallengeForm'));
const CurrentForm = React.lazy(() => import('./pages/CurrentForm'));
const WhereToGoPage = React.lazy(() => import('./pages/WhereToGoPage'));

export function App() {
  const { i18n } = useTranslation();
  /**
      <Helmet
        titleTemplate="%s - GitHub Tunisia"
        defaultTitle="Github Tunisia"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="GitHub's Tunisian Community" />
      </Helmet>
      */

  return (
    <BrowserRouter>
      <React.Suspense data-test="App" fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <ErrorBoundry>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/members" component={MembersPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/timeline" component={TimeLinePage} />
              <Route exact path="/contactus" component={ContactUsPage} />
              <Route exact path="/questions" component={QuestionsPage} />
              <Route exact path="/challenge" component={ChallengeForm} />
              <Route exact path="/currentform" component={CurrentForm} />
              <Route path="*" component={WhereToGoPage} />
            </Switch>
          </ErrorBoundry>
          <IconToOrg />
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </BrowserRouter>
  );
}
