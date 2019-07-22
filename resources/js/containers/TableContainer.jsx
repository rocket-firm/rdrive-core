import React, {Component} from 'react';
import { connect } from 'react-redux';

class TableContainer extends Component {
    
    render() {
       const {schema} = this.props.match.params; 
       const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
       console.dir(fields)
        return (
            <div className="table-container">
                <table>
                   <thead>
                        <tr>
                            {fields.map((item, key) => <th key={key}>{item.key}</th>)}
                        </tr>
                   </thead>

                </table>
            </div>
        )
    }
}


export default  connect(
    ({
        schemas
        
    }) => ({schemas}),
    null    
)(TableContainer)