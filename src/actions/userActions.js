import axios from 'axios'

export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';


export const addUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: {
            new_user: newUser
        }
    }
};


export const getUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch({
                    type: GET_USERS,
                    payload: {
                        users: response.data
                    }
                })
            })
            .catch(error => console.log(error))
    }
};