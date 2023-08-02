import React from "react";
import {Route,Switch} from "react-router-dom";
import NotFoundIndex from "./pages/NotFoundIndex";
import Home from "./pages/Home";
import Profile from "./components/Home/Profile";
import Login from "./components/Login/Login";
import Cart from "./components/cart/Cart";
import Payment from "./components/common/Payment";
import Register from "./components/Login/Register";
import PaymentResponse from "./components/common/PaymentResponse";
import Products from "./components/common/Products";

function App() {
  return (
      <Switch>
        <Route exact path='/'>
            <Login/>
        </Route>
          <Route path='/login'>
                <Login/>
          </Route>
          <Route path='/Register'>
              <Register/>
          </Route>
          <Route path='/profile'>
              <Profile/>
          </Route>
          <Route path='/cart'>
              <Cart/>
          </Route>
          <Route path='/payment'>
              <Payment/>
          </Route>
          <Route path='/products'>
              <Products/>
          </Route>
          <Route path='/response'>
              <PaymentResponse/>
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
