import React, {Component} from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { connect } from 'react-redux';


export class ModelScreen extends Component {

    componentDidMount() {
        const { schema } = this.props.match.params;
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        // fields.map((item, key) => {
        //     let value = this.props.models[item.key];
        //     this.props.dispatch(change('model', value, value))
        // })
    }

    shouldComponentUpdate(nextProps) {
         const { schema, id } = this.props.match.params;
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        const {models: modelsNext} = nextProps;
        fields.map((item, key) => {
            const keyElem = item.key;
            let value = modelsNext[schema].data[id][item.key]; 
            this.props.dispatch(change('model', value, value))
        })

        if(modelsNext.isFetch) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { schema } = this.props.match.params;
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        return (
            <div>
                <form>
                    {/* <div>
                        <label htmlFor="code">CODE</label>
                        <Field name="code" component="input" label="code" />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" component="input" label="name" />
                    </div> */}

                    {fields.map((item, key) => {
                        return (
                            <div key={key}>
                                <label htmlFor={item.key}>{item.key}</label>
                                <Field name={item.key} component="input" label={item.key} />
                            </div>
                        )
                    })}
                </form>
            </div>
        )
    }
} 

ModelScreen = reduxForm({
    // a unique name for the form
    form: 'model'
})(ModelScreen)

const selector = formValueSelector('model')

ModelScreen = connect(
    state => {
        // or together as a group
        return {
            initialValues: {
                code: '',
                name: ''
            }
        }
    }
)(ModelScreen)