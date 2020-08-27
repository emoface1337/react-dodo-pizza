import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './scss/App.scss'

import App from './App'
import store from './store/store'

ReactDOM.render(
    // <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>,
    // </React.StrictMode>,
    document.getElementById('root')
)