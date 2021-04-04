import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Teampage from "./pages/TeamPage";
import FormPage from "./pages/FormPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPage";


import WhereToGoPage from "./pages/WhereToGoPage";
import ErrorBoundry from "./components/ErrorBoundry";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import IconToOrg from "./components/IconToOrg";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <div className="App">
        <ErrorBoundry>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/team" component={Teampage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/form" component={FormPage} />
              <Route path="*" component={WhereToGoPage} />
            </Switch>
            <IconToOrg />
            <Footer />
          </BrowserRouter>
        </ErrorBoundry>
      </div>
    </React.Suspense>
  );
}

export default App;
