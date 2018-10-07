import React, { Component } from 'react';
import KeysContent from './KeysContent';

class KeysDemo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [
                { component: 'First...', id: 1 },
                { component: 'Second...', id: 2 },
                { component: 'Third...', id: 3 }
            ]
        };
    }
    
    render() {
        return (
            <div className="App-Left">
                <br/>
                <ul>
                    {this.state.data.map((dynamicComponent, i) => <KeysContent
                        key={i} componentData={dynamicComponent} />)}
                </ul>
                
            </div>
        );
    }
}

export default KeysDemo;