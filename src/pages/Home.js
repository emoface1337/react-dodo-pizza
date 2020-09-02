import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import { setCategory, setSortBy } from '../store/actions/filterActions'
import { fetchItems } from '../store/actions/menuActions'
import PizzaLoader from '../components/PizzaBlock/PizzaLoader'
import { addItemToCart } from '../store/actions/cartActions'

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    { name: "популярности", type: "popular", order: 'desc' },
    { name: "цене", type: "price", order: 'desc' },
    { name: "алфавиту", type: "name", order: 'asc' }
]

const Home = memo(() => {

    const dispatch = useDispatch()

    const { items, isLoaded } = useSelector(({ menuReducer }) => menuReducer)

    const cartItems = useSelector(({ cartReducer }) => cartReducer.items)

    const { category, sortBy } = useSelector(({ filterReducer }) => filterReducer)

    useEffect(() => {
        dispatch(fetchItems(category, sortBy))
    }, [dispatch, category, sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSort = useCallback(type => {
        dispatch(setSortBy(type))
    }, [dispatch])

    const handleAddItemToCart = item => {
        dispatch(addItemToCart(item))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onSelectCategory={onSelectCategory}
                            categories={categories} activeCategory={category}/>
                <SortPopup
                    items={sortItems} activeSortType={sortBy.type} onSelectSort={onSelectSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(item => (
                            <PizzaBlock key={item.id} {...item}
                                        onAddItem={handleAddItemToCart}
                                        addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                            />
                        )) :
                        Array(12).fill(0).map((_, index) => <PizzaLoader key={index}/>)
                }
            </div>
        </div>
    )
})

export default Home