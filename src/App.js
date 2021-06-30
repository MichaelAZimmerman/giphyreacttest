import "./App.css";
import React, { useState } from "react";
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
  const [loggedIn, setLoggedIn] = useState();
  return (
    <>
      <Router>
        <header>{loggedIn && <div>{loggedIn} is logged in</div>}</header>
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
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/favs" component={Favs} login={loggedIn} />
            <Route path="/search">
              <Search />
            </Route>
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
