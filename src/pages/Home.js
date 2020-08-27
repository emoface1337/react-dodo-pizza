import React, { memo, useCallback } from 'react'
import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import { useDispatch, useSelector } from "react-redux"
import { setCategory } from "../store/actions/filterActions"

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" }
]

const Home = memo(() => {

    const dispatch = useDispatch()

    const catalogItems = useSelector(({ menuReducer }) => menuReducer.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onSelectCategory={onSelectCategory}
                            categories={categories}/>
                <SortPopup
                    items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    catalogItems && catalogItems.map(pizza => (
                        <PizzaBlock key={pizza.id} {...pizza}/>
                    ))
                }
            </div>
        </div>
    )
})

export default Home