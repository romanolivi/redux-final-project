export const signUp = (userData) => dispatch => {
    dispatch({type: 'SIGN_UP', username: userData.username, password: userData.password, balance: userData.balance})
}

export const logIn = (userData) => dispatch => {
    dispatch({type: 'LOG_IN', username: userData.username, password: userData.password, balance: userData.balance})
}

export const changeBalance = (amount) => dispatch => {
    dispatch({type: 'CHANGE_UP', balance: amount.balance})
}

export const addGoal = (goal) => dispatch => {
    dispatch({type: 'ADD_GOAL', goals: goal.goals})
}

  

