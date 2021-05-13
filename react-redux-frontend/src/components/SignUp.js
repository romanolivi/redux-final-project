import React from 'react';
import {Formik, Field, Form} from 'formik';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';

const SignUp = (props) => {
    

    const handleSubmit = (values) => {
        console.log(values.username);
        console.log(values.password);
        console.log(values.balance);   
        props.signUp(values);     
        props.history.push('/dashboard');
    }

    return (
        <div>
            <Formik initialValues={{username: '', password: '', balance: null}} onSubmit={(values) => handleSubmit(values)}>
                <Form>
                    <fieldset className="form-group">
                        <label>Username</label>
                        <Field type="text" className="form-control" name="username" />
                    </fieldset>

                    <fieldset className="form-group">
                        <label>Password</label>
                        <Field type="text" className="form-control" name="password" />
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