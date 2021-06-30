import "./App.css";
import React from "react";
import Login from "./components/Login";
import Display from "./components/Display";
import Favs from "./components/Favs";
import Search from "./components/Search";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav>
          <NavLink activeClassName="active" to="/login">
            Log-out
          </NavLink>
          <NavLink activeClassName="active" to="/favs">
            Favorites
          </NavLink>
          <NavLink activeClassName="active" to="/search">
            Search
          </NavLink>
        </nav>
        <menu>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/favs" component={Favs} />
            <Route path="/search" component={Search} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </menu>
      </Router>
    </>
  );
}

export default App;
