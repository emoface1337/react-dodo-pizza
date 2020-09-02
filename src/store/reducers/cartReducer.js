import { constants } from '../constants'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = items => items.reduce((sum, item) => sum + item.price, 0)

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.ADD_ITEM_TO_CART: {

            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allItems = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allItems)

            return {
                ...state,
                items: newItems,
                totalCount: allItems.length,
                totalPrice
            }
        }

        case constants.CLEAR_CART:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        default:
            return state
    }
}