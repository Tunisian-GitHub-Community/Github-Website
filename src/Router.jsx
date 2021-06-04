import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";

// chuck files and laod only what is needed
const Teampage = lazy(() => import("./pages/TeamPage"));
const GuidelinesPage = lazy(() => import("./pages/GuidelinesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const CurrentForm = lazy(() => import("./pages/CurrentForm"));
const WhereToGoPage = lazy(() => import("./pages/WhereToGoPage"));

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/members" component={Teampage} />
    <Route exact path="/guidelines" component={GuidelinesPage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route exact path="/form" component={FormPage} />
    <Route exact path="/contactus" component={ContactUsPage} />
    <Route exact path="/currentform" component={CurrentForm} />
    <Route path="*" component={WhereToGoPage} />
  </Switch>
);

export default Router;
