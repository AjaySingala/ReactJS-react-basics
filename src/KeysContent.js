import React, { Component } from 'react';

class KeysContent extends Component {
    render() {
        return (
            <li>
                <div>{this.props.componentData.id}: {this.props.componentData.component}</div>
            </li>
        );
    }
}

export default KeysContent;