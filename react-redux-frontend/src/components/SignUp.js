import React from 'react';
import {Formik, Field, Form} from 'formik';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import UserDataService from '../api/UserDataService';

const SignUp = (props) => {
    

    const handleSubmit = (values) => {
        props.signUp(values);     
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