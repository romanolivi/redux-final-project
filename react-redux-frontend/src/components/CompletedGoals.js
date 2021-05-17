import React from 'react';
import { connect } from 'react-redux';


const CompletedGoals = (props) => {

    const completeGoals = props.goals.filter(goal => goal.completed === true)

    return (
        <div>
            <p>Completed Goals:</p>
            <ol>
            {completeGoals.map(goal => 
                <li key={goal.id}>
                    {goal.name}
                </li>)}
                </ol>
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
export default connect(mapStateToProps)(CompletedGoals);