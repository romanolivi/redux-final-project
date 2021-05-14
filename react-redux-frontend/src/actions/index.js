import axios from 'axios';

export const signUp = (userData) => dispatch => {
    axios.post('http://localhost:3000/users', userData)
                    .then((resp) => dispatch({type: 'SIGN_UP', username: resp.data.username, balance: resp.data.balance, id: resp.data.id}))
}

export const logIn = (userData) => dispatch => {
    dispatch({type: 'LOG_IN', username: userData.username, balance: userData.balance})
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

  

