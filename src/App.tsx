import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Display } from './components/Display/Display';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <span>REACTive Calculator</span>
                <img src={logo} className="App-logo" alt="logo" />
                <Display values={'Test'} />
            </header>
        </div>
    );
}

export default App;
