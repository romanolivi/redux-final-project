import React from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { logIn } from '../actions/index';
import UserDataService from '../api/UserDataService';


const LogIn = props => {

    const handleSubmit = (values) => {
        const user = {
            username: values.username,
        }
        UserDataService.logUser(user);
        props.logIn(values);
        props.history.push('/dashboard')
    }


    return (
        <div>
            <Formik initialValues={{username: ''}} onSubmit={(values) => handleSubmit(values)}>
                <Form>
                    <fieldset className="form-group">
                        <label>Username</label>
                        <Field type="text" className="form-control" name="username" />
                    </fieldset>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )  
}

export default connect(null, { logIn })(LogIn);