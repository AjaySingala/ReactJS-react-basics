import React, { Component } from 'react';
import Content from './Content';

class ComponentLifecycle extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 0
        };

        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1});
    }
    
    render() {
        return (
            <div>
                <br />
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}

export default ComponentLifecycle;