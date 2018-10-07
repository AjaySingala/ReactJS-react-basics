import React, { Component } from 'react';

class EventContent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.updateStateProp}>CLICK TO UPDATE</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}

export default EventContent;