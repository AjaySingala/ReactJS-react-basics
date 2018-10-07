// The following example shows how to use refs to clear the input field. 
// ClearInput function searches for element with ref = "myInput" value, 
// resets the state, and adds focus to it after the button is clicked.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: ""
        };

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    
    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            <div>
                <br/>
                <input value={this.state.data}
                    onChange={this.updateState}
                    ref="myInput"></input>
                <button onClick={this.clearInput}>CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default RefsDemo;