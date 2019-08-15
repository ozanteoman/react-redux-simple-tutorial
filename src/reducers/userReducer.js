import {ADD_USER, GET_USERS} from "../actions/userActions";

const users = (state = {user_list: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            const new_user = action.payload.new_user;
            state.user_list.push(new_user);
            return {...state};

        case GET_USERS:
            const users = action.payload.users;
            return {
                ...state,
                user_list: [...users]
            };

        case 'update_user':
            break;
        default:
            return {...state}
    }
};

export default users;