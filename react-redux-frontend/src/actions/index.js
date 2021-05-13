export const signUp = (userData) => dispatch => {
    dispatch({type: 'SIGN_UP', username: userData.username, password: userData.password, balance: userData.balance})
}

