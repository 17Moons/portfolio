import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./Landing.jsx";



function App(){
  return (
    <div>
    <Router>
      <Switch>
       <Route exact path="/">
         <Landing />
     </Route>
      </Switch>
    </Router>
  </div>
  );

}

export default App;
