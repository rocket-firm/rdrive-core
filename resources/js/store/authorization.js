const types = {
    SET_USER: 'SET_USER',
    AUTH_USER: 'AUTH_USER'
}

const setCurrentUser = payload => ({
    type: types.SET_USER,
    payload
})

export const initialState = {
    isAuthenticated: false,
    users: {}
}

export default (state=initialState, {type, payload} ) => {
    switch (type) {
        case types.SET_USER: 
            return {
                ...payload
            };
        
        case types.AUTH_USER:
            return {
                ...payload
            }
        default:
            return state;
    }
}