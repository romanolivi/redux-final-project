import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


const Dashboard = (props) => {


    return (
        <div>
            <p>{props.id}</p>
            <header>Welcome {props.username}</header>
            <p>I see you have a balance of ${props.balance} and you have {props.goals.length} goals.</p>
            <p><Link to={'/balance'}>Click here</Link> if you want to update your balance.</p>
            <p><Link to={'./goal-form'}>Click here</Link> if you have a goal to add or remove.</p>
            
            {props.goals.map(goal => <li>{goal}</li>)}
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