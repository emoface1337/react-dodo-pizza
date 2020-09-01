import { constants } from '../constants'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.ADD_ITEM_TO_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, item) => sum + item.price, 0)
            }
        }

        default:
            return state
    }
}