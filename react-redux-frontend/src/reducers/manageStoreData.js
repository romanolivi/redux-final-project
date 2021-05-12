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
            return {...state, loggedIn: action.payload}
        
        default: 
            return state;
    }
}