const initialState = {
    loggedIn: false,
    id: '',
    username: '',
    balance: 0,
    goals: []
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case 'LOG_IN':
            return {...state, username: action.username, balance: action.balance, id: action.id, goals: action.goals, loggedIn: true}

        case 'SIGN_UP':
            return {...state, loggedIn: true, username: action.username, balance: action.balance, id: action.id}

        case 'ADD_BALANCE':
            return {...state, balance: parseInt(action.payload)}

        case 'SUBTRACT_BALANCE':
            return {...state, balance: parseInt(action.payload)}    

        case 'ADD_GOAL': 
            console.log(action.goals)
            return {...state, goals: [...state.goals, action.goals]}

        case 'DELETE_GOAL':
            return {...state, goals: state.goals.filter(goal => goal.id !== action.goal.id)}

        case 'COMPLETE_GOAL': 
            return {...state, goals: action.goal.completed = true};

        default:   
            return state;
    }
}