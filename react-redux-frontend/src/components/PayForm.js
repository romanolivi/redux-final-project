import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

        if (!goal || !amount) {
            return props.history.push('/failure');
        } 

        let findGoal = props.goals.find(g => (g.name === x));
        // console.log(findGoal)
        let goalIndex = props.goals.findIndex(g => g.name === goal)

        let updatePaidAmount = parseInt(amount) + parseInt(findGoal.paid);
        let completedGoal = findGoal.price <= updatePaidAmount ? true : false
        let values = {
            balance: parseInt(props.balance) - parseInt(amount),
            id: props.id,
            goals: findGoal

        }
        

        let goalValues = {
            paid: updatePaidAmount,
            completed: completedGoal,
        }

        if (parseInt(amount) > parseInt(findGoal.price)|| parseInt(amount) > props.balance) {
            props.history.push('failure');
        } else if (parseInt(amount) > (parseInt(findGoal.price) - parseInt(findGoal.paid))) { 
            console.log(parseInt(amount) > (parseInt(findGoal.price) - parseInt(findGoal.paid)));
            values.balance = parseInt(props.balance) - ((parseInt(findGoal.price) - parseInt(findGoal.paid)))
            goalValues.paid = parseInt(findGoal.price);
            goalValues.completed = true;
            console.log(goalValues)
            props.payGoal(goalValues, findGoal.id, goalIndex, values)
        } else if (props.balance > parseInt(amount)) {
            console.log("hey")
            props.payGoal(goalValues, findGoal.id, goalIndex, values);    
        } else {
            props.history.push('/failure')
        }
        
        
        console.log(findGoal.price - findGoal.paid)        
        event.target.reset()
    }


    return (
        <div className="outer-form">
            <div className="inner-form">
                <div className="pay-form">
                    <h1>Pay Form</h1>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <select className="form-select" id="pay-goal" onChange={(event) => handleGoalChange(event)}>
                            <option value='none' />
                            {incompleteGoals.map((goal, idx) => 
                            <option key={idx} value={goal.name} name={goal.name}>{goal.name}</option>)}
                        </select>
                        
                        <label>Amount you wish to contribute:</label>
                        <input type='text' name="amount" id="pay-goal"onChange={(event) => handleAmountChange(event)} />
                        <button type="submit" id="pay-goal" class="btn btn-primary">Pay</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ goals, balance, id }) => {
    return { goals, balance, id }
}


export default connect(mapStateToProps, ({ payGoal, subtractBalance }))(PayForm);