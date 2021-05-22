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
//         <div className="row my-4">
//              <form>

// <h3>Log in</h3>

// <div className="form-group">
//     <label>Email</label>
//     <input type="email" className="form-control" placeholder="Enter email" />
// </div>

// <div className="form-group">
//     <label>Password</label>
//     <input type="password" className="form-control" placeholder="Enter password" />
// </div>

// <div className="form-group">
//     <div className="custom-control custom-checkbox">
//         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//     </div>
// </div>

// <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
// <p className="forgot-password text-right">
//     Forgot <a href="#">password?</a>
// </p>
// </form>
            
            
            
            
        <div className="outer">
            <div className="inner">    
                <Formik initialValues={{username: ''}} onSubmit={(values) => handleSubmit(values)}>
                        <Form>
                            <fieldset className="form-group">
                                <label className="">Username</label>
                                <Field type="text" className="form-control" name="username" />

                                <label>Pass Key</label>
                                <Field type="text" className="form-control" name="id" />
                            </fieldset>

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik> 
            </div>
        </div>
    )  
}


export default connect(null, { logIn })(LogIn);