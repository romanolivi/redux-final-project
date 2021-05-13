import React from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { logIn } from '../actions/index';


const LogIn = props => {

    const handleSubmit = (values) => {
        props.logIn(values);
        props.history.push('/dashboard')
    }


    return (
        <div>
            <Formik initialValues={{username: '', password: ''}} onSubmit={(values) => handleSubmit(values)}>
                <Form>
                    <fieldset className="form-group">
                        <label>Username</label>
                        <Field type="text" className="form-control" name="username" />
                    </fieldset>

                    <fieldset className="form-group">
                        <label>Password</label>
                        <Field type="text" className="form-control" name="password" />
                    </fieldset>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )  
}

export default connect(null, { logIn })(LogIn);