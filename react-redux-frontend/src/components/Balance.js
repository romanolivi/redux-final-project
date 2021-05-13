import React from 'react';
import { connect } from 'react-redux';

const Balance = (props) => {
    return (
        <div>
            <header>Welcome to your Balance page</header>
            <p>{props.username}'s balance: ${props.balance} </p>  
        </div>
    )
}
  
const mapStateToProps = state => {
    return {
        username: state.username,
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Balance);