/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - GitHub Tunisia"
        defaultTitle="Github Tunisia"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="GitHub's Tunisian Community" />
      </Helmet>

      <Switch></Switch>
    </BrowserRouter>
  );
}
