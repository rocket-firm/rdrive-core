import React, {Component} from 'react';
import { connect } from 'react-redux';


class TableContainer extends Component {

    render() {
        const props = this.props;
        console.log(this)
        return (
            <div className="table-container">
                
            </div>
        )
    }
}

 export default connect(
    ({schemas}) => ({schemas}),
    null    
)(TableContainer)