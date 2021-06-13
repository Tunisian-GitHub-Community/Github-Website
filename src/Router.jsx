import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
// lazy loaded what's needed.
const Teampage = lazy(() => import("./pages/TeamPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const TimeLinePage = lazy(() => import("./pages/TimeLinePage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const ChallengeForm = lazy(() => import("./pages/ChallengeForm"));

const CurrentForm = lazy(() => import("./pages/CurrentForm"));
const WhereToGoPage = lazy(() => import("./pages/WhereToGoPage"));

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/members" component={Teampage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route exact path="/timeline" component={TimeLinePage} />
    <Route exact path="/contactus" component={ContactUsPage} />
    <Route exact path="/challenge" component={ChallengeForm} />
    <Route exact path="/currentform" component={CurrentForm} />
    <Route path="*" component={WhereToGoPage} />
  </Switch>
);

export default Router;
