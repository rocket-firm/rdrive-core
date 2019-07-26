import React, {Component} from 'react';

export default class TableContainer extends Component {
    
    componentDidMount() {
        const {schema} = this.props.match.params;   
        const {getModels} = this.props;
        getModels(schema);
    }

    shouldComponentUpdate(nextProps) {
        const {schema} = this.props.match.params;   
        const {getModels} = this.props;
        
        if(schema == nextProps.schema) {
            return false;
        } else {
            getModels(schema);
            return true;
        }
    }

    render() {
        const {schema} = this.props.match.params; 
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        const {models} = this.props.models;
        return (
            <div className="table-container">
                <table>
                   <thead>
                        <tr>
                            {fields.map((item, key) => <th key={key}>{item.key}</th>)}
                        </tr>
                   </thead>
                   <tbody>
                       {models.map((item, key)=> {
                           return <tr key={key}>
                               {Object.values(item).map((item, key) => {
                                   return <td key={key}>{item}</td>
                               })}
                           </tr>
                       })}
                   </tbody>
                </table>
            </div>
        )
    }
}
