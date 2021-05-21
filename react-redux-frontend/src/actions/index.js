import axios from 'axios';

export const signUp = (userData) => dispatch => {
    axios.post('http://localhost:3000/users', userData)
    // .then((resp) => console.log(resp.data))    
    .then((resp) => dispatch({type: 'SIGN_UP', username: resp.data.username, balance: resp.data.balance, id: resp.data.id}))
}

export const logIn = (userData) => dispatch => {
    axios.get(`http://localhost:3000/users/${userData.id}`, userData)
    // .then((resp) => console.log(resp.data))
    .then((resp) => dispatch({type: 'LOG_IN', username: resp.data.username, balance: resp.data.balance, id: resp.data.id, goals: resp.data.goals}))
}

export const addBalance = (values) => dispatch => {
    axios.put(`http://localhost:3000/users/${values.id}`, values)
        // .then((resp) => console.log(resp.data.balance))
        .then((resp) => dispatch({type: 'ADD_BALANCE', payload: resp.data.balance}))
}

export const subtractBalance  = (values) => async dispatch => {
    await axios.put(`http://localhost:3000/users/${values.id}`, values)
        // .then((resp) => console.log(resp.data.balance))
        .then((resp) => dispatch({type: 'SUBTRACT_BALANCE', payload: resp.data.balance}))
}

// export const payGoal = (values, goalId, goalValues) => async dispatch => {
//     await axios.put(`http://localhost:3000/users/${values.id}`, values)
//         // .then((resp) => console.log(resp.data.balance))
//         .then((resp) => dispatch({type: 'PAY_GOAL', payload: resp.data.balance}))
// }

export const addGoal = (goal) => dispatch => {
    axios.post('http://localhost:3000/goals', goal)
        // .then((resp) => console.log(resp.data))
        .then((resp) => dispatch({type: 'ADD_GOAL', goals: resp.data}))
} 

export const deleteGoal = (goal) => dispatch => {
    axios.delete(`http://localhost:3000/goals/${goal.id}`, goal)
    // .then((resp) => console.log(resp.data.id))
    .then(() => dispatch({type: 'DELETE_GOAL', goal}))
}

export const payGoal = (goalValues, id, goalIndex, values) => async dispatch => {
    await axios.put(`http://localhost:3000/goals/${id}`, goalValues)
        .then((resp) => dispatch({type: 'PAY_GOAL', payload: goalValues.paid, id: goalIndex, completed: goalValues.completed}))
        .then(() => axios.put(`http://localhost:3000/users/${values.id}`, values)
            .then((resp) => dispatch({type: 'SUBTRACT_BALANCE', payload: resp.data.balance})))
}



  

