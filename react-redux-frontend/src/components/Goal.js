import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteGoal, subtractBalance, completeGoal } from '../actions/index';


class Goal extends Component {

    handleDelete = () => {
        this.props.deleteGoal(this.props.goal);
    }

    handleComplete = () => {
        this.props.goal.completed = true;
        const values = {
            balance: parseInt(this.props.balance) - parseInt(this.props.goal.price),
            id: this.props.id
        }
        this.props.subtractBalance(values);
        this.props.completeGoal(this.props.goal);
        console.log(this.props.goals)
    }

    
    render() {
        const { goal } = this.props
    
        return (
            <div>
                <li>
                    {goal.name} - Price: {goal.price}
                    <button onClick={this.handleDelete}> X </button>
                    <button onClick={this.handleComplete} className="btn btn-success">Complete Goal</button>
                </li>
            </div>
        )
        
    
    }
}

const mapStateToProps = state => {
    return {
        balance: state.balance,
        id: state.id,
        goals: state.goals
    }
}



export default connect(mapStateToProps, ( { deleteGoal, subtractBalance, completeGoal }))(Goal);