import React from 'react';
import {Formik, Field, Form} from 'formik';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';

const SignUp = (props) => {
    

    const handleSubmit = (values) => {
        const userData = {
            username: values.username,
            balance: values.balance
        }
        props.signUp(userData);     
        props.history.push('/dashboard');
    }

    return (
        <div>
            <Formik initialValues={{username: '', balance: null}} onSubmit={(values) => handleSubmit(values)}>
                <Form>
                    <fieldset className="form-group">
                        <label>Username</label>
                        <Field type="text" className="form-control" name="username" />
                    </fieldset>

                    <fieldset className="form-group">
                        <label>Balance</label>
                        <Field type="text" className="form-control" name="balance" />
                    </fieldset>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )

}

export default connect(null, { signUp })(SignUp);