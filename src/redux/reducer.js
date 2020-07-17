const initialState = {
    user_id: null,
    username: null,
    profile_pic: null
}

const STORE_USER_INFO = 'STORE_USER_INFO';

export const storeUserInfo = (user_id, username, profile_pic) => {
    return {
        type: STORE_USER_INFO,
        payload: {
            user_id,
            username,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STORE_USER_INFO:
            const {user_id, username, profile_pic} = action.payload;
            return {user_id, username, profile_pic};
        default:
            return state;
    }
}