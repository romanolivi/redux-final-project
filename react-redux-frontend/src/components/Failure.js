import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Failure = (props) => {

    return (
        <div className="card">
            <h1>Something went wrong with your submission.</h1>
            <h3>You either overpaid for the goal or didn't have enough money in your account.</h3>
            <p><Link to={'./goals'}>Click here</Link> to go to the goal page.</p>
            <p><Link to={'./dashboard'}>Click here</Link> to go to the dashboard.</p>
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

export default connect(mapStateToProps)(Failure);