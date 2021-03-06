import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import {
  Login,
  Post,
  Profile,
  Register,
  Header
} from './components';


export default function App() {
  return (
    <Router>
      <Header/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Post">Post</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Register">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Post">
            <Post />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render (<App/>, document.getElementById('app'))
