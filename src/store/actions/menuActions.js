import axios from 'axios'

export const fetchItems = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:7777/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => dispatch(setItems(data)))
}

export const setItems = items => ({
    type: 'SET_ITEMS',
    payload: items
})

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})