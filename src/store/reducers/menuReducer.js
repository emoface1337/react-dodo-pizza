import { constants } from '../constants'

const initialState = {
    items: [],
    isLoaded: false
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.SET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }

        case constants.SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }

        default:
            return state
    }
}