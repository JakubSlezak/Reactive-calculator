import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Display } from './components/Display/Display';
import { Button } from './components/Button/Button';

function App() {
    const [state, setState] = useState('0');
    const list = ['C', '0', '.', '=', '1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', 'sqrt', 'pow', '%', '+'];
    return (
        <div className="App">
            <header className="App-header">
                <span>REACTive Calculator</span>
                <img src={logo} className="App-logo" alt="logo" />
                <Display values={'Test'} />
                <span>{state}</span>
                <div className='row'>
                    {list.map((item) => (<Button onClickHandler={(item) => setState(item)} value={item} />))}
                </div>
            </header>
        </div>
    );
}

export default App;
