import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Teampage from "./pages/TeamPage";
import Survey from "./pages/Survey";
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
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/team" component={Teampage} />
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
