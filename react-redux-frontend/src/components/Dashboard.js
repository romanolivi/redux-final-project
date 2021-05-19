import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Goal from './Goal';
import GoalsContainer from '../containers/GoalsContainer';


const Dashboard = (props) => {

    const incompleteGoals = props.goals.filter(goal => goal.completed === false)

    function validate(item) {
        if (item === true) {
            return 'Completed'
        } else {
            return 'Incomplete'
        }
    };

    function handleGoal(goal) {
        <Goal goal={goal} />
        console.log('hey')
    }

    return (
        <div>
            <p>{props.id}</p>
            <header>Welcome {props.username}</header>
            <p>I see you have a balance of ${props.balance} and {incompleteGoals.length} goals yet to be completed.</p>
            <p><Link to={'/balance'}>Click here</Link> if you want to update your balance.</p>
            <p><Link to={'./goal-form'}>Click here</Link> if you have a goal to add or remove.</p>
            <p><Link to={'./completed-goals'}>Click here</Link> to see your completed goals.</p>
            <p><Link to={'./goals'}>Click here</Link> to go to the goal page.</p>
            
           
        </div>
    )   
}

const mapStateToProps = state => {
    return {
        username: state.username,
        balance: state.balance,
        goals: state.goals,
        id: state.id
    }
}

export default connect(mapStateToProps)(Dashboard);