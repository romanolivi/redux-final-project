import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { addGoal } from '../actions/index';

const GoalForm = (props) => {

    const handleSubmit = (values) => {
        const goal = {
            name: values.name,
            price: parseInt(values.price),
            user_id: props.id
        }
        props.addGoal(goal);
        props.history.push('/dashboard');
    } 

    return (
        <div>
            <header>Welcome, {props.username}</header>
            <p>Balance: {props.balance}</p>
            <p>Enter your new goal below</p>
            <Formik initialValues={ {name: '', price: ''}} onSubmit={(values) => handleSubmit(values)}>
                <Form>
                    <fieldset className="form-group">
                        <label>New Goal:</label>
                        <Field type="text" name="name" className="form-control" />

                        <label>Goal Price:</label> 
                        <Field type="number" name="price" className="form-control" />
                    </fieldset>
                    
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
  
const mapStateToProps = ({username, balance, goals, id}) => {
    return { username, balance, goals, id }
}

export default connect(mapStateToProps, { addGoal })(GoalForm);