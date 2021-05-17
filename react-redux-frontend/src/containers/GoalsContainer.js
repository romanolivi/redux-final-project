import React, { Component } from 'react';
import Goals from '../components/Goals';
import { connect } from 'react-redux';

class GoalsContainer extends Component {

    render() {
        return (
            <div>
                <Goals goals={this.props.goals} />
            </div>
        )
    }
}

const mapStateToProps = ({ goals }) => {
    return { goals }
}

export default connect(mapStateToProps)(GoalsContainer);