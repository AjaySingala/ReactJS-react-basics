import React, { Component } from 'react';
import EventContent from './Event-Content';

class EventsDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "Initial data...",
            childData: "Initial data..."
        };

        this.updateState = this.updateState.bind(this);
        this.updateChildState = this.updateChildState.bind(this);
    }

    updateState() {
        this.setState({ data: "Data Updated..." });
    }

    updateChildState() {
        this.setState({ childData: "Data updated from child component..." });
    }

    render() {
        return (
            <div>
                <div>
                    <br />
                    <h2>Event in same component</h2>
                    <button onClick={this.updateState}>CLICK TO UPDATE</button>
                    <h4>{this.state.data}</h4>
                </div>
                <div>
                    <br />
                    <h2>Child Events</h2>
                    <p>
                        When we need to update the state of the parent component from 
                        its child, we can create an event handler (updateChildState) in the 
                        parent component and pass it as a prop (updateStateProp) to the 
                        child component where we can just call it.
                    </p>
                    <EventContent myDataProp={this.state.childData} 
                        updateStateProp={this.updateChildState}>CLICK TO UPDATE</EventContent>
                </div>
            </div>
        );
    }
}

export default EventsDemo;