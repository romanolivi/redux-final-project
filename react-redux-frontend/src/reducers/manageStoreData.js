import uuid from 'uuid';

const initialState = {
    loggedIn: false,
    id: '',
    username: '',
    balance: 20,
    goals: []
}

export default (state = initialState, action ) => {
    let goal;
    switch(action.type) {
        case 'LOG_IN':
            return {...state, username: action.username, balance: action.balance, loggedIn: true}

        case 'SIGN_UP':
            return {...state, loggedIn: true, username: action.username, balance: action.balance, id: action.id}

        case 'ADD_BALANCE':
            return {...state, balance: state.balance += parseInt(action.payload)}

        case 'SUBTRACT_BALANCE':
            return {...state, balance: state.balance -= parseInt(action.payload)}    

        case 'ADD_GOAL': 
            console.log(action.goal)
            return {...state, goals: [...state.goals, action.goals]}

        default:   
            return state;
    }
}