import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Formik, Field, Form } from 'formik';
import { addGoal } from '../actions/index';
import NumberFormat from 'react-number-format';


class GoalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            errors: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let errors = [];

        if (!this.state.name) {
            errors.push("name")
        } 
        
        if (!this.state.price || this.state.price < 0) {
            errors.push("price")
        }

        this.setState({
            errors: errors
        })

        if (errors.length > 0) {
            return false;
        } 

        const goal = {
            name: this.state.name,
            price: parseInt(this.state.price),
            user_id: this.props.id,
            completed: false,
            paid: 0
        }

        this.props.addGoal(goal);
        this.props.history.push('/dashboard');
    } 

    
    hasError(error) {
        return this.state.errors.indexOf(error) !== -1
    }

    render() {
        return (
        <div className="outer">
            <div className="inner">
            <header>Welcome, {this.props.username}</header>
            <p>Balance: <NumberFormat value={this.props.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <p>Enter your new goal below</p>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Goal Name:</label>
                    <div>
                        <input type="text" autoComplete="off" className={this.hasError("name") ? "form-control is-invalid" : "form-control"} name="name" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className={this.hasError("name") ? "inline-errormsg" : "hidden"}>
                        Goal is empty or already made
                    </div>

                    <label>Goal Price:</label>
                    <div>
                        <input type="number" autoComplete="off" id="new-price" className={this.hasError("price") ? "form-control is-invalid" : "form-control"} name="price" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className={this.hasError("price") ? "inline-errormsg" : "hidden"}>
                        Goal must have a positive price
                    </div>

                    <button type="submit" id="new-price">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )};
};
  
const mapStateToProps = ({username, balance, goals, id}) => {
    return { username, balance, goals, id }
}

export default connect(mapStateToProps, { addGoal })(GoalForm);


// <Formik initialValues={ {name: '', price: ''}} onSubmit={(values) => handleSubmit(values)}>
//                 <Form>
//                     <fieldset className="form-group">
//                         <label>New Goal:</label>
//                         <Field type="text" name="name" className="form-control" />

//                         <label>Goal Price:</label> 
//                         <Field type="number" name="price" className="form-control" />
//                     </fieldset>
                    
//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>