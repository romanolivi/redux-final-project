import React from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';


const App = (props, {history=useHistory}) => {
  <Router history={history} >
    <div>
      <Route exact path={'/'} component={Start} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/login'} component={LogIn} />
      <Route exact path={'/dashboard'} component={Dashboard} />
      <Route exact path={'/goal-form'} component={GoalForm} />
      <Route exact path={'/balance'} component={Balance} />
    </div>
  </Router>

}


export default App;
