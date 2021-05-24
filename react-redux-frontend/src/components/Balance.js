import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBalance, subtractBalance } from '../actions/index';
import NumberFormat from 'react-number-format';


class Balance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            errors: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToBalance = this.addToBalance.bind(this);
        this.subtractFromBalance = this.subtractFromBalance.bind(this)
    }

    isNormalInteger(str) {
        return /^\+?\d+$/.test(str);
    }

    addToBalance = () => {
        let errors = [];
        if (!this.state.amount || this.isNormalInteger(this.state.amount) === false) {
            errors.push("amount")
        } 

        this.setState({
            errors: errors
        });
        
        if (errors.length > 0) {
            return false;
        }

        const values = {
            balance: parseInt(this.props.balance) + parseInt(this.state.amount),
            id: this.props.id
        }
        this.props.addBalance(values)
    }

    subtractFromBalance = () => {
        let errors = [];
        if (!this.state.amount || this.isNormalInteger(this.state.amount) === false) {
            errors.push("amount")
        } 

        this.setState({
            errors: errors
        });
        
        if (errors.length > 0) {
            return false;
        }

        const values = {
            balance: parseInt(this.props.balance) - parseInt(this.state.amount),
            id: this.props.id
        }
        this.props.subtractBalance(values)
        console.log(this.hasError("amount"))
    }

    handleChange = event => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    hasError(error) {
        return this.state.errors.indexOf(error) !== -1
    }

    render() {
        return (
        
        
<div className="outer">
    <div className="inner">
    <header>Welcome to your Balance page</header>
    <p>{this.props.username}'s balance: <NumberFormat value={this.props.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
    
    
    <p>Enter your new balance:</p>  
    <form>
        <div>
            <label className="balance-label">Add or subtract</label>
            <div>
                <input type="number" id="balance-input" autoComplete="off" className={this.hasError("amount") ? "form-control is-invalid" : "form-control"} name="amount" onChange={(event) => this.handleChange(event)} />
            </div>
            <div className={this.hasError("amount") ? "inline-errormsg" : "hidden"}>
                Please enter a value
            </div>
            <button type="button" id="add" className="btn btn-success" onClick={this.addToBalance}>Add</button>

            <button type="button" id="subtract" className="btn btn-danger" onClick={this.subtractFromBalance}>Subtract</button>
        </div>
    </form>  
    </div>          
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












