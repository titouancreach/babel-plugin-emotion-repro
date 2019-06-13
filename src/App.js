import React from 'react'
import logo from './logo.svg'
import './App.css'

import {css} from 'emotion'
import cn from 'classnames'

function CustomComponent({someBoolean}) {
    return (
        <div
            className={cn('static classname', {
                [css({padding: 10})]: someBoolean,
            })}
        >
            Hello World{' '}
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <CustomComponent someBoolean={true} />
            </header>
        </div>
    )
}

export default App
