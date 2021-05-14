import axios from 'axios';
import { connect } from 'react-redux';

class UserDataService {
    
    // createUser = (user) => {
    //     return axios.post('http://localhost:3000/users', user)
    //                 .then((data) => addID(data.id))
    // }

    logUser = (user) => {
        return axios.get('http://localhost:3000/users', user)
    }
}

export default new UserDataService();