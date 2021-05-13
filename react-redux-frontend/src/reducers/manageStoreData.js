const initialState = {
    loggedIn: false,
    username: '',
    password: '',
    balance: null,
    goals: []
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case 'LOG_IN':
            return {...state, username: action.username, password: action.password, balance: action.balance, loggedIn: true}

        case 'SIGN_UP':
            return {...state, loggedIn: true, username: action.username, password: action.password, balance: action.balance}

        case 'CHANGE_UP':
            return {...state, balance: action.balance}

        default:   
            return state;
    }
}