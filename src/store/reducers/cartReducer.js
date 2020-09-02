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

        case constants.REMOVE_CART_ITEM:

            const newItems = {
                ...state.items
            }

            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length

            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        case constants.PLUS_CART_ITEM: {

            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allItems = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allItems)

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount: allItems.length
            }
        }

        case constants.MINUS_CART_ITEM: {

            const oldItems = state.items[action.payload].items
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allItems = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allItems)

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount: allItems.length
            }
        }

        default:
            return state
    }
}