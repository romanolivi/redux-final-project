import React from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Start from './components/Start';
import SignUp  from './components/SignUp';
import LogIn  from './components/LogIn';
import GoalForm  from './components/GoalForm';
import Dashboard  from './components/Dashboard';
import Balance  from './components/Balance';
import AuthenticatedRoute from './components/authentication/AuthenticatedRoute';
import CompletedGoals from './components/CompletedGoals';

const defaultHistory = createBrowserHistory();

const App = (props, {history= defaultHistory}) => {
  return ( 
  <Router history={history} >
    <div>
      <Route exact path={'/'} component={Start} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/login'} component={LogIn} />
      <Route exact path={'/dashboard'} component={Dashboard} />
      <Route exact path={'/goal-form'} component={GoalForm} />
      <Route exact path={'/balance'} component={Balance} />
      <Route exact path={'/completed-goals'} component={CompletedGoals} />
    </div>
  </Router>
  )
}


export default App;
