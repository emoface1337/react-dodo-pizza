import { constants } from '../constants'

const initialState = {
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
    category: null
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }

        case constants.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}