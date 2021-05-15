import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { addBalance, subtractBalance } from '../actions/index';

class Balance extends Component {

    state = {
        amount: 0
    };

    addToBalance = () => {
        const values = {
            balance: parseInt(this.props.balance) + parseInt(this.state.amount),
            id: this.props.id
        }
        this.props.addBalance(values)
    }

    subtractFromBalance = () => {
        const values = {
            balance: parseInt(this.props.balance) - parseInt(this.state.amount),
            id: this.props.id
        }
        this.props.subtractBalance(values)
    }

    handleChange = event => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <div>
            <header>Welcome to your Balance page</header>
            <p>{this.props.username}'s balance: ${this.props.balance} </p>
            <p>Enter your new balance:</p>  
            <form>
                <label>Add or subtract</label>
                <input type="number" name="amount" onChange={(event) => this.handleChange(event)} />

                <button type="button" className="btn btn-success" onClick={this.addToBalance}>Add</button>

                <button type="button" className="btn btn-danger" onClick={this.subtractFromBalance}>Subtract</button>
            </form>            
        </div>
        )
    }
}
  
const mapStateToProps = state => {
    return {
        username: state.username,
        balance: state.balance,
        id: state.id
    }
}

export default connect(mapStateToProps, { addBalance, subtractBalance })(Balance);














// <Formik initialValues={ {balance: null}} onSubmit={(amount) => handleSubmit(amount)}>
//                 <Form>
//                     <fieldset className="form-group">
//                         <label>ADD OR SUBTRACT:</label>
//                         <Field type="integer" name="balance" className="form-control" /> 
//                     </fieldset>
                    
//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>