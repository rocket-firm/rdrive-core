import {loadStore} from './persistence';

const authenticate = () => {
    const {user} = loadStore()
    return (user && user.isAuthenticated) ? true : false; 
}

export default authenticate;