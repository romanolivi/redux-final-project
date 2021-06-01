import React from 'react';
import './bootstrap.css';
import { BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SignUp  from './components/SignUp';
import Failure from './components/Failure';
import LogIn  from './components/LogIn';
import FailedLogin from './components/FailedLogin';
import GoalForm  from './components/GoalForm';
import Dashboard  from './components/Dashboard';
import Balance  from './components/Balance';
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
      <div className="signin">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {!loggedIn && <Link className="nav-link" to={"/login"}>Log in</Link>}
                </li>
                <li className="nav-item">
                  {!loggedIn && <Link className="nav-link" to={"/signup"}>Sign up</Link>}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header>
        <Navbar expand="md" className="navbar">
          {loggedIn && <NavbarBrand tag={NavLink} to="/dashboard">
            <strong>Goal Monster</strong>
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
      <div className>
        <Route exact path={'/'} component={LogIn} /> 
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/login'} component={LogIn} />
        <Route exact path={'/dashboard'} component={Dashboard} />
        <Route exact path={'/goal-form'} component={GoalForm} />
        <Route exact path={'/balance'} component={Balance} />
        <Route exact path={'/completed-goals'} component={CompletedGoals} />
        <Route exact path={'/goals'} component={Goals} />
        <Route exact path={'/goal/:id'} component={Goal} />
        <Route exact path={'/failure'} component={Failure} />
        <Route exact path={'/failure'} component={FailedLogin} />
      </div>

     </div>
  </Router>
  )
}

const mapStateToProps = ({ loggedIn }) => {
  return { loggedIn }
}


export default connect(mapStateToProps)(App);
