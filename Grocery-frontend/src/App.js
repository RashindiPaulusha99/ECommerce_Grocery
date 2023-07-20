import React from "react";
import {Route,Switch} from "react-router-dom";
import NotFoundIndex from "./pages/NotFoundIndex";
import Home from "./pages/Home";

function App() {
  return (
      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
          <Route path='/login'>

          </Route>
          <Route path='/home'>
              <Home/>
          </Route>
          <Route path='*'>
              <NotFoundIndex/>
          </Route>
      </Switch>
  );
}

export default App;
