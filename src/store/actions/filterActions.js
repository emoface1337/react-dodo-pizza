import { constants } from '../constants'

export const setSortBy = ({ type, order }) => ({
    type: constants.SET_SORT_BY,
    payload: { type, order }
})

export const setCategory = categoryIndex => ({
    type: constants.SET_CATEGORY,
    payload: categoryIndex
})