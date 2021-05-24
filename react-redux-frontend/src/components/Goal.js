import React from "react";
import { connect } from 'react-redux';
import { deleteGoal, subtractBalance} from '../actions/index';

const Goal = (props) => {

    const handleDelete = () => {
        props.deleteGoal(props.goals);
        props.history.push('/dashboard');
    }

    const handleComplete = () => {
        props.goal.completed = true;
        const values = {
            balance: parseInt(props.balance) - parseInt(props.goals.price),
            id: props.id
        }
        props.subtractBalance(values);
        props.completeGoal(props.goals);
        props.history.push('/dashboard');
    }

        return (
            <div>
                <li>
                    {console.log(props.goals.filter(goal => goal.id === props.match.params.id))}
                    {props.goals.name} - Price: {props.goals.price} - Amount Left to Complete: {props.goals.paid}
                    <button onClick={handleDelete}> X </button>
                    <button onClick={handleComplete} className="btn btn-success">Complete Goal</button>
                </li>
            </div>
        )
        
    
    }


const mapStateToProps = state => {
    return {
        balance: state.balance,
        id: state.id,
        goals: state.goals
    }
}



export default connect(mapStateToProps, ( { deleteGoal, subtractBalance }))(Goal);