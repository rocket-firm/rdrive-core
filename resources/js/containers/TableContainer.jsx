import React, {Component} from 'react';
import styled from 'styled-components';


const TableUI = styled.table`
    margin-top: 100px;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #000;
`

const ThUI = styled.th`
    bacgkround: blue;
    border: 1px solid #000;
`

const TdUI = styled.td`
    border: 1px solid #000;
`

export default class TableContainer extends Component {
    
    componentDidMount() {
        const {schema} = this.props.match.params;   
        const {getModels} = this.props;
        getModels(schema);
    }

    shouldComponentUpdate(nextProps) {
        const {schema} = this.props.match.params;   
        const {models} = this.props;   
        const {getModels} = this.props;

        if(models.isFetch) {
            return false;
        } else {
            getModels(schema);
            return true;
        }
    }

    render() {
        console.dir(this)
        const {schema} = this.props.match.params; 
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        const {data} = this.props.models[schema] ? this.props.models[schema] : {data: []};
        return (    
            <div className="table-container">
                <TableUI>
                   <thead>
                        <tr>
                            {fields.map((item, key) => <ThUI key={key}>{item.key}</ThUI>)}
                        </tr>
                   </thead>
                   <tbody>
                       {data.map((item, key)=> {
                           return <tr key={key}>
                               {fields.map((elem, keyElem) => {
                                   console.log(item)
                                   return (
                                       <TdUI key={keyElem}>{item[elem.key]}</TdUI>
                                   )
                               })}
                           </tr>
                       })}
                   </tbody>
                </TableUI>
            </div>
        )
    }
}
