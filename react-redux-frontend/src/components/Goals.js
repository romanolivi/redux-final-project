import React, { Component } from "react";
import Goal from './Goal';


class Goals extends Component {
    
    render() {
        if (this.props.goals) {
            const incompleteGoals = this.props.goals.filter(goal => goal.completed === false);
            const goalList = incompleteGoals.map(goal => {
                return (
                    <Goal key={goal.id} goal={goal} />
                )
            });

            return (
                <ol>
                    {goalList}
                </ol>
            )
        };
    

    }
}

export default Goals;