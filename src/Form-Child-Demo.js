import React, { Component } from 'react';
import FormContent from './Form-Content';

class FormChildDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "Initial data..."
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({ data: e.target.value });
    }

    render() {
        return (
            <div>
                <br />
                <FormContent myDataProp={this.state.data}
                    updateStateProp={this.updateState}>
                </FormContent>
            </div>
        );
    }
}

export default FormChildDemo;