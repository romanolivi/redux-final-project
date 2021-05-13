import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends Component {

    render(props) {
        if (this.props.loggedIn === true) {
            return <Route {...this.props} />
        } else {
            return <Redirect to={'/'} />
        }
    }
}

const mapStateToProps = ({ loggedIn }) => {
    return {
        loggedIn
    }
}

export default connect(mapStateToProps)(AuthenticatedRoute);