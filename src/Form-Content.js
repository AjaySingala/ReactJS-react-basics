import React, { Component } from 'react';

class FormContent extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.myDataProp}
                    onChange={this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default FormContent;