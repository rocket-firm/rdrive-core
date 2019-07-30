import React, {Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';


export class ModelScreen extends Component {

    render() {
        console.log(this)
        const fields = (this.props.schemas[schema]) ? this.props.schemas[schema].fields : [];
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="code">CODE</label>
                        <Field name="code" component="input" label="code" />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" component="input" label="name" />
                    </div>
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
        const { code, name } = selector(state, 'code', 'name')
        return {
            code,
            name
        }
    }
)(ModelScreen)