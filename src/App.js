import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoute'

// Module
import Login from './Modules/Login/Login'
import Home from './Modules/Home/Home'

// AUTH
// 1. Authentication -> Login
// 2. Authorization -> Role

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} exact/>
        <PrivateRoute path="/postMovie" render={() => "Post Movie"} access="admin"/>
      </Switch>
    </Router>
  );
}

export default App;
