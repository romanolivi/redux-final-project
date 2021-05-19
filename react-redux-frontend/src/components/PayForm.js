import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { payGoal, subtractBalance } from '../actions/index';


const PayForm = (props) => {

    const [goal, setGoal] = useState("");
    const [amount, setAmount] = useState("");

    const incompleteGoals = props.goals.filter(goal => goal.completed === false);

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let x = goal
        let userIndex = props.goals.findIndex(g => g.name === goal);
        let findGoal = props.goals.find(g => (g.name === x));
        let goalIndex = props.goals.findIndex(g => g.name === goal)

        let updatePaidAmount = parseInt(amount) + parseInt(findGoal.paid);
        let completedGoal = findGoal.price <= updatePaidAmount ? true : false
        let values = {
            balance: parseInt(props.balance) - parseInt(amount),
            id: props.id
        }
        let goalValues = {
            paid: updatePaidAmount,
            completed: completedGoal
        }

        console.log(goalIndex)
        console.log(findGoal.id)
        console.log(goalValues)
        console.log(values)

        props.subtractBalance(values);
        props.payGoal(goalValues, findGoal.id, goalIndex);
    }


    return (
        <div>
            <h1>Pay Form</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <select className="form-select" onChange={(event) => handleGoalChange(event)}>
                    <option value='none' />
                    {incompleteGoals.map((goal, idx) => 
                    <option key={idx} value={goal.name} name={goal.name}>{goal.name}</option>)}
                </select>
                
                <label>Amount you wish to contribute:</label>
                <input type='text' name="amount" onChange={(event) => handleAmountChange(event)} />
                <button type="submit">button</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ goals, balance, id }) => {
    return { goals, balance, id }
}


export default connect(mapStateToProps, ({ payGoal, subtractBalance }))(PayForm);