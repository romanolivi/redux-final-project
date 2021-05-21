import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';


const CompletedGoals = (props) => {

    const completeGoals = props.goals.filter(goal => goal.completed === true)

    return (
        <div>
            <p>Completed Goals:</p>
            <ol>
            {completeGoals.map(goal => 
                <li key={goal.id}>
                    {goal.name} - Price: <NumberFormat value={goal.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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