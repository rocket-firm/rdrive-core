import  { Component } from 'react';
import authenticate from '../services/authenticate';

export default  class AuthentificateCont extends Component {
    constructor(props) {
        super(props)
        const {history} = props;
        !authenticate() && history.push('/login')
    }
}


