
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './components/Button/Button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <span>REACTive Calculator</span>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='row'>
                    <Button value='sqrt' />
                    <Button value='pow' />
                    <Button value='%' />
                    <Button value='+' />
                </div>
                <div className='row'>
                    <Button value='7' />
                    <Button value='8' />
                    <Button value='9' />
                    <Button value='-' />
                </div>
                <div className='row'>
                    <Button value='4' />
                    <Button value='5' />
                    <Button value='6' />
                    <Button value='*' />
                </div>
                <div className='row'>
                    <Button value='1' />
                    <Button value='2' />
                    <Button value='3' />
                    <Button value='/' />
                </div>
                <div className='row'>
                    <Button value='C' />
                    <Button value='0' />
                    <Button value='.' />
                    <Button value='=' />
                </div>
            </header>
        </div>
    );
}

export default App;
