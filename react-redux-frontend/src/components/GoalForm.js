import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { addGoal } from '../actions/index';

const GoalForm = (props) => {

    const handleSubmit = (goal) => {
        props.addGoal(goal);
        props.history.push('/dashboard');
    } 

    return (
        <div>
            <header>Welcome, {props.username}</header>
            <p>Balance: {props.balance}</p>
            <p>Enter your new goal below</p>
            <Formik initialValues={ {goals: props.goals}} onSubmit={(goal) => handleSubmit(goal)}>
                <Form>
                    <fieldset className="form-group">
                        <label>New Goal:</label>
                        <Field type="text" name="goals" className="form-control" /> 
                    </fieldset>
                    
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
  
const mapStateToProps = state => {
    return {
        username: state.username,
        balance: state.balance,
        goals: state.goals
    }
}

export default connect(mapStateToProps, { addGoal })(GoalForm);