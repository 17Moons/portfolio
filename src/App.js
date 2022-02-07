import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from "./Landing.jsx";
import Homepage from "./homepage.jsx";



function App(){
  return (
    <div>
    <Router>
      <Switch>
       <Route exact path="/">
         <Landing />
     </Route>
     <Route path="/homepage">
       <Homepage />
   </Route>
      </Switch>
    </Router>
  </div>
  );

}

export default App;
