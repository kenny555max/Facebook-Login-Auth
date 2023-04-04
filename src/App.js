import React, { Component } from 'react';
import './App.css';
import Auth from './Auth';

export class App extends Component {
  render() {
    return (
        <div>
            <header className='header' style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'end', padding: '30px' }}>
                    <h2>Facebook Auth Example</h2>
            </header>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '200px', lineHeight: '2' }}>
                <p>To get started, authenticate with Facebook</p>
                <Auth />
            </div>
        </div>
    )
  }
}

export default App;