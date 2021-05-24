import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';


const CompletedGoals = (props) => {

    const completeGoals = props.goals.filter(goal => goal.completed === true)
    const tableBody = completeGoals.map((goal, index) => 
            <tr>
                <th scope="row">{index}</th>
                <td>{goal.name}</td>
                <td><NumberFormat value={goal.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
            </tr>
        )

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Goal Name</th>
                        <th scope="col">Goal Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
            
        </div>
    )

}

const mapStateToProps = state => {
    return {
        username: state.username,
        balance: state.balance,
        goals: state.goals,
        id: state.id
    }
}
export default connect(mapStateToProps)(CompletedGoals);


// <p>Completed Goals:</p>
//             <ol>
//             {completeGoals.map(goal => 
//                 <li key={goal.id}>
//                     {goal.name} - Price: <NumberFormat value={goal.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
//                 </li>)}
//                 </ol>