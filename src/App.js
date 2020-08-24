import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header/Header'
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7777/pizzas')
        .then(({ data }) => setPizzas(data))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home pizzas={pizzas}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    )
}

export default App
