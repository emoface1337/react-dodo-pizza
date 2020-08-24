import React from 'react'
import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"

const Home = ({ pizzas }) => (
    <div className="container">
        <div className="content__top">
            <Categories onClickItem={(name) => console.log(name)}
                        categories={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
            <SortPopup items={["популярности", "цене", "алфавиту"]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                pizzas.map(pizza => (
                    <PizzaBlock key={pizza.id} {...pizza}/>
                ))
            }
        </div>
    </div>
)

export default Home