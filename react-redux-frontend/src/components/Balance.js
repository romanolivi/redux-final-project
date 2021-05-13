import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { changeBalance } from '../actions/index';

const Balance = (props) => {

    const handleSubmit = (amount) => {
        props.changeBalance(amount);
        props.history.push('/dashboard');
    } 

    return (
        <div>
            <header>Welcome to your Balance page</header>
            <p>{props.username}'s balance: ${props.balance} </p>
            <p>Enter your new balance:</p>  
            <Formik initialValues={ {balance: props.balance}} onSubmit={(amount) => handleSubmit(amount)}>
                <Form>
                    <fieldset className="form-group">
                        <label>New Balance:</label>
                        <Field type="integer" name="balance" className="form-control" /> 
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
        balance: state.balance
    }
}

export default connect(mapStateToProps, { changeBalance })(Balance);