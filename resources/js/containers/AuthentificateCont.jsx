import React, { Component } from 'react';
import {loadStore} from '../services/persistence';
import { connect } from 'react-redux';
import store from '../store';
import authenticate from '../services/authenticate';

export default  class AuthentificateCont extends Component {
    constructor(props) {
        super(props)
        const {history} = props;
        authenticate() ? history.push('/dashboard') : history.push('/login')
    }
}


