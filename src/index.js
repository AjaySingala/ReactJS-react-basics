import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App headerProp="Header from props..."
    contentProp="Content from props..."/>, 
    document.getElementById('root')
);

// // to be used with Component Lifecycle demo.
// // Unmount the component after 10 seconds.
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);

registerServiceWorker();
