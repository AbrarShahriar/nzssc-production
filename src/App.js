import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Pages/Home';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Router>
      <Switch>
          <div className="app">

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/sidebar'>
              <Home Extension={Sidebar} />
            </Route>

          </div>
      </Switch>
    </Router>
  );
}

export default App;
