import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class ComponentApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    // Find Dom Node.
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = "green";
    }

    // Sometimes we might want to update the component manually.
    forceUpdateHandler() {
        this.forceUpdate();
    }

    // Set State.
    setStateHandler() {
        var item = "setState...";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({ data: myArray });
    }


    render() {
        return (
            <div>
                <br />
                <div className="App">
                    <button onClick={this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.data}</h4>
                </div>
                <div>
                    <button onClick={this.setStateHandler}>FORCE UPDATE</button>
                    <h4>Random Number: {Math.random()}</h4>
                </div>
                <div>
                    <button onClick={this.findDomNodeHandler}>FIND DOM NODE</button>
                    <div id="myDiv">NODE</div>
                </div>
            </div>
        );
    }
}

export default ComponentApi;