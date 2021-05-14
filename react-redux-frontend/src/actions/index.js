import axios from 'axios';

export const signUp = (userData) => dispatch => {
    axios.post('http://localhost:3000/users', userData)
    .then((resp) => console.log(resp.data))    
    // .then((resp) => dispatch({type: 'SIGN_UP', username: resp.data.username, balance: resp.data.balance, id: resp.data.id}))
}

export const logIn = (userData) => dispatch => {
    console.log(userData)
    console.log(userData.id)
    axios.get(`http://localhost:3000/users/${userData.id}`, userData)
    // .then((resp) => console.log(resp))
    .then((resp) => dispatch({type: 'LOG_IN', username: resp.data.username, balance: resp.data.balance, id: resp.data.id}))
}

export const addBalance = (amount) => dispatch => {
    axios.patch('http://localhost:3000/users', amount)
        .then((resp) => console.log(resp.data))
        // .then((resp) => dispatch({type: 'ADD_BALANCE', payload: resp.data.attributes.balance}))
}

export const subtractBalance  = (amount) => dispatch => {
    axios.patch('http://localhost:3000/users', amount)
    .then((resp) => dispatch({type: 'SUBTRACT_BALANCE', payload: resp.data.balance}))
}

export const addGoal = (goal) => dispatch => {
    dispatch({type: 'ADD_GOAL', goals: goal.goals})
}

  

