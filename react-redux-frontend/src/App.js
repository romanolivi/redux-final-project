import React from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Start from './components/Start';
import SignUp  from './components/SignUp';
import Failure from './components/Failure';
import LogIn  from './components/LogIn';
import GoalForm  from './components/GoalForm';
import Dashboard  from './components/Dashboard';
import Balance  from './components/Balance';
import AuthenticatedRoute from './components/authentication/AuthenticatedRoute';
import CompletedGoals from './components/CompletedGoals';
import Goals from './components/Goals';
import Goal from './components/Goal';
import { Collapse, Nav, Navbar, NavItem, NavbarBrand, NavbarToggler } from 'reactstrap';
import { useState } from 'react';
import { connect } from 'react-redux';





const defaultHistory = createBrowserHistory();

const App = (props, {history= defaultHistory}) => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedIn = props.loggedIn
  return ( 
  <Router history={history} >
    <div className="fixed-layout">
      <header>
        <Navbar expand="md" className="navbar">
          {loggedIn && <NavbarBrand tag={NavLink} to="/dashboard">
            <strong>Redux Final Project</strong>
          </NavbarBrand>}
          <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {loggedIn && <NavLink className="nav-link" to={'/balance'}>Balance</NavLink>}
              </NavItem>
              <NavItem>
                {loggedIn && <NavLink className="nav-link" to={'/goal-form'}>New Goal</NavLink>}
              </NavItem>
              <NavItem>
                {loggedIn && <NavLink className="nav-link" to={'/completed-goals'}>Completed Goals</NavLink>}
              </NavItem>
              <NavItem>
                {loggedIn && <NavLink className="nav-link" to={'/goals'}>Goals</NavLink>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <div>
        <Route exact path={'/'} component={Start} /> 
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/login'} component={LogIn} />
        <Route exact path={'/dashboard'} component={Dashboard} />
        <Route exact path={'/goal-form'} component={GoalForm} />
        <Route exact path={'/balance'} component={Balance} />
        <Route exact path={'/completed-goals'} component={CompletedGoals} />
        <Route exact path={'/goals'} component={Goals} />
        <Route exact path={'/goal/:id'} component={Goal} />
        <Route exact path={'/failure'} component={Failure} />
      </div>

     </div>
  </Router>
  )
}

const mapStateToProps = ({ loggedIn }) => {
  return { loggedIn }
}


export default connect(mapStateToProps)(App);
