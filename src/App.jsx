import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Survey from "./pages/Survey";
import WhereToGoPage from "./pages/WhereToGoPage";
import ErrorBoundry from "./components/ErrorBoundry";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import IconToOrg from "./components/IconToOrg";

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
              <Route path="*" component={WhereToGoPage} />
            </Switch>
            <IconToOrg />
          </BrowserRouter>
        </ErrorBoundry>
      </div>
    </React.Suspense>
  );
}

export default App;
