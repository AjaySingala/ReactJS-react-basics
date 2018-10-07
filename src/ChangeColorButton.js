import React, { Component } from 'react';

class ChangeColorButton extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log('Changing color...');
        this.props.clickHandler();
    }

    render() {
        return (
            <button onClick={this.handleClick}>I don't like {this.props.currentColor}
            </button>
        );
    }
}

export default ChangeColorButton;
