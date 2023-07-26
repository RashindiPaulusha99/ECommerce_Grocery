import React from "react";
import {Route,Switch} from "react-router-dom";
import NotFoundIndex from "./pages/NotFoundIndex";
import Home from "./pages/Home";
import Profile from "./components/Home/Profile";
import AddToCart from "./components/cart/AddToCart";
import Login from "./components/Home/Login";
import Cart from "./components/cart/Cart";

function App() {
  return (
      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
          <Route path='/login'>
                <Login/>
          </Route>
          <Route path='/profile'>
              <Profile/>
          </Route>
          <Route path='/cart'>
              <Cart/>
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
