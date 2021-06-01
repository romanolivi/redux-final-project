import React, { Component } from "react";
import { deleteGoal, subtractBalance} from '../actions/index';
import { connect } from 'react-redux';
import PayForm from './PayForm';
import NumberFormat from 'react-number-format';




class Goals extends Component {

    handleDelete(goal) {
        this.props.deleteGoal(goal);
        this.props.history.push('/dashboard')
    };

   
    
    render() {
        let incompleteGoals = this.props.goals.filter(goal => goal.completed === false);
        
        let goalList = incompleteGoals.map(goal => {
            return (
                <div>
                    <div className="progress" key={goal.id}>
                        <div className="progress-bar" role="progress-bar" style={{width: `${goal.paid/goal.price * 100}%`}} area-valuenow={`${goal.paid/goal.price * 100}`} area-valuemin={"0"} area-valuemax="100">
                            {goal.name} - Price: {goal.price} - Amount Paid: {goal.paid}
                        </div>
                    </div>
                    <button className="btn btn-danger" id="delete-goal" onClick={() => this.handleDelete(goal)}> X </button>
                </div>
                )
        }); 

            return (
                <ol>
                    <header>Balance: <NumberFormat value={this.props.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></header>
                    {goalList}
                    <PayForm history={this.props.history}/>
                </ol>
            )
        };


    

}


const mapStateToProps = state => {
    return { 
        balance: state.balance,
        id: state.id,
        goals: state.goals
    }
}


export default connect(mapStateToProps, ({ deleteGoal, subtractBalance}))(Goals);




 