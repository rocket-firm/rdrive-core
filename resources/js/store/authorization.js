import {getUserFetch} from 'api'

const types = {
    SET_USER: 'SET_USER'
}

const setCurrentUser = payload => { return ({
    type: types.SET_USER,
    payload
})}

export const initialState = {
    isAuthenticated: false,
    user: {}
}

export const getUserAuthenticate = (user) => async (dispatch) => {
    let data = await getUserFetch(user)
    dispatch(setCurrentUser(data))
}

export default (state=initialState, {type, payload} ) => {
    switch (type) {
        case types.SET_USER: 
            return {
                user: payload.user
            }
        default:
            return state;
    }
}