import axios from 'axios'
import { constants } from '../constants'

export const fetchItems = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:7777/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => dispatch(setItems(data)))
}

export const setItems = items => ({
    type: constants.SET_ITEMS,
    payload: items
})

export const setLoaded = payload => ({
    type: constants.SET_LOADED,
    payload
})