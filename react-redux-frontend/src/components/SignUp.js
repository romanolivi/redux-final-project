import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { Component } from 'react';

class SignUp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            balance: 0,
            errors: []
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let errors = [];

        if(!this.state.username) {
            errors.push("username")
        }

        this.setState({
            errors: errors
        })

        if(errors.length > 0) {
            event.preventDefault();
            return false 
        }

        const userData = {
            username: this.state.username,
            balance: this.state.balance
        }
        this.props.signUp(userData);     
        this.props.history.push('/dashboard');
    }

    hasError(error) {
        return this.state.errors.indexOf(error) !== -1
    }


    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div>
                            <label>Username:</label>
                            <div>
                                <input type="text" autoComplete="off" className={this.hasError("username") ? "form-control is-invalid" : "form-control"} name="username" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className={this.hasError("username") ? "inline-errormsg" : "hidden"}>
                                Must enter a username
                            </div>

                            <label>Balance:</label>
                            <div>
                                <input type="text" autoComplete="off" className={this.hasError("balance") ? "form-control is-invalid" : "form-control"} name="balance" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className={this.hasError("balance") ? "inline-errormsg" : "hidden"}>
                                Must enter a balance
                            </div>

                            <button type="submit" id="login" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        )}

}

export default connect(null, { signUp })(SignUp);