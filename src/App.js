import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { setItems } from './store/actions/menuActions'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:7777/pizzas')
        .then(({ data }) => dispatch(setItems(data)))
    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    )
}
export default (App)
