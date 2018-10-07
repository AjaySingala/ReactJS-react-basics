import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class StateAndProps extends Component {
    // This is for "state" demo.
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1><strong><u>State Overview</u></strong></h1>
                    <h3>{this.state.header}</h3>
                    <h3>{this.state.content}</h3>
                </div>
                <div>
                    <h1><strong><u>Props Overview</u></strong></h1>
                    <h3>{this.props.headerProp}</h3>
                    <h3>{this.props.contentProp}</h3>
                </div>
                <div>
                    <h1><strong><u>Props Validation</u></strong></h1>
                    <h2>Hello, {this.props.name}</h2>
                    <h3>Array: {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? "True" : "False"}</h3>
                    <h3>Func: {this.props.propFunc(25)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                </div>
            </div>
        );
    }
}

// This is for props demo.
StateAndProps.propTypes = {
    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string
};

StateAndProps.defaultProps = {
    name: 'Ajay Singala',
    // Comment out propArray and propBool to show error in browser console window.
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) {
        return e;
    },
    propNumber: 1,
    propString: "String Value..."
};

export default StateAndProps;
