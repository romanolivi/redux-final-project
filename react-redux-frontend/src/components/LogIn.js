import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/index';
import { Component } from 'react';



class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            errors: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.logIn(this.state.username);
        this.props.history.push('/dashboard')
    }

    hasError(error) {
        return this.state.errors.indexOf(error) !== -1
    }



    render() {
        return (
            <div className="outer">
                <div className="inner">    
                <h5 id="welcome-message">Welcome to Goal Monster</h5>
                <h6 id="welcome-message-2">Create and keep track of your</h6>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div>
                        <label>Username:</label>
                        <div>
                            <input type="text" autoComplete="off" className={this.hasError("username") ? "form-control is-invalid" : "form-control"} name="username" onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className={this.hasError("username") ? "inline-errormsg" : "hidden"}>
                            Must enter a username
                        </div>

                        <button type="submit" id="login" className="btn btn-primary">Log In</button>
                    </div>
                    </form>
                </div>
            </div>
    )}  
}

const mapStateToProps = ({ loggedIn }) => {
    return { loggedIn }
}

export default connect(mapStateToProps, { logIn })(LogIn);