import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import WhereToGoPage from "./pages/WhereToGoPage";
import ErrorBoundry from "./components/ErrorBoundry";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";

/*
<iframe title="iframe" id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet"></iframe>
<script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
*/
function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <div className="App">
        <ErrorBoundry>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route component={WhereToGoPage} />
            </Switch>
          </BrowserRouter>
        </ErrorBoundry>
      </div>
    </React.Suspense>
  );
}

export default App;
