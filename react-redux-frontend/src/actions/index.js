import axios from 'axios';

export const signUp = (userData) => dispatch => {
    axios.post('http://localhost:3000/users', userData)
        .then((resp) => dispatch({type: 'SIGN_UP', username: resp.data.attributes.username, balance: resp.data.attributes.balance, id: resp.data.attributes.id}))
}

export const logIn = (userData) => dispatch => {
    axios.get('http://localhost:3000/users', userData)
    .then((resp) => dispatch({type: 'LOG_IN', username: resp.data.data[0].attributes.username, balance: resp.data.data[0].attributes.balance, goals: resp.data.data[0].relationships.goals.data, id: resp.data.data[0].id}))
}

export const addBalance = (amount) => dispatch => {
    dispatch({type: 'ADD_BALANCE', payload: amount})
}

export const subtractBalance  = (amount) => dispatch => {
    dispatch({type: 'SUBTRACT_BALANCE', payload: amount})
}

export const addGoal = (goal) => dispatch => {
    dispatch({type: 'ADD_GOAL', goals: goal.goals})
}

  

