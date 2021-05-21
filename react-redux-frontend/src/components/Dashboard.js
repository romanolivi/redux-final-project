import React from 'react';
import { connect } from 'react-redux';
import Goal from './Goal';
import NumberFormat from 'react-number-format';
import { deleteGoal } from '../actions/index';

const Dashboard = (props) => {

    const completedGoals = props.goals.filter(goal => goal.completed === true)
    const goalsCard = props.goals
    console.log(goalsCard[props.goals.length - 1]);
    function paidSum() {
        return props.goals.reduce((a, b) => a + (b.paid || 0), 0);
    } 

    console.log(goalsCard)

    function validate(item) {
        if (item === true) {
            return 'Completed'
        } else {
            return 'Incomplete'
        }
    };

    
    function showGoalPrice(i) {
        if (goalsCard[i]) {
            return goalsCard[i].price
        } else {
            return '-'
        };
    };

    function showGoalName(i) {
        if (goalsCard[i]) {
            return goalsCard[i].name
        } else {
            return '-'
        };
    };

    
    function showGoalPaid(i) {
        if (goalsCard[i]) {
            return goalsCard[i].paid
        } else {
            return '-'
        };
    };

    
    function showGoalCompleted(i) {
        if (goalsCard[i]) {
            return goalsCard[i].completed
        } else {
            return '-'
        };
    };

    return (
        <div>

            <div class="row my-4">
                <div class="col-4">
                    <div class="card">
                        <h5 class="card-header">Total Goals</h5>
                        <div class="card-body">
                            <h5 class="card-title">{props.goals.length}</h5>
                            <p class="card-text text-success">{Math.round((completedGoals.length/props.goals.length)*100)}% of goals completed</p>
                        </div>
                        </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <h5 class="card-header">Goals Completed</h5>
                        <div class="card-body">
                            <h5 class="card-title">{completedGoals.length}</h5>
                            <p class="card-text text-success">{Math.round((completedGoals.length/props.goals.length)*100)}% of goals completed</p>
                        </div>
                        </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <h5 class="card-header">Balance</h5>
                        <div class="card-body">
                            <h5 class="card-title"><NumberFormat value={props.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h5>
                            <p class="card-text">Total amount paid: <NumberFormat value={paidSum()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                        </div>
                        </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-lg-0">
                    <div class="card">
                        <h5 class="card-header">Latest goal transactions</h5>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Goal</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Amount Left</th>
                                        <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 1)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 1)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 1) - showGoalPaid(props.goals.length - 1)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 1))}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 2)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 2) - showGoalPaid(props.goals.length - 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 2))}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 3)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 3)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 3) - showGoalPaid(props.goals.length - 3)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 3))}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 4)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 4)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 4) - showGoalPaid(props.goals.length - 4)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 4))}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 5)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 5)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 5) - showGoalPaid(props.goals.length - 5)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 5))}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">{showGoalName(props.goals.length - 6)}</th>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 6)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><NumberFormat value={showGoalPrice(props.goals.length - 6) - showGoalPaid(props.goals.length - 6)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td>{validate(showGoalCompleted(props.goals.length - 6))}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                                <a href="#" class="btn btn-block btn-light">View all</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                </div>
                </div>


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

export default connect(mapStateToProps, { deleteGoal })(Dashboard);