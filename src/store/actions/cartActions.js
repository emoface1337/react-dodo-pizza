import { constants } from '../constants'

export const addItemToCart = item => ({
    type: constants.ADD_ITEM_TO_CART,
    payload: item
})

export const clearCart = ()=> ({
    type: constants.CLEAR_CART
})

export const removeCartItem = id => ({
    type: constants.REMOVE_CART_ITEM,
    payload: id
})

export const plusCartItem = id => ({
    type: constants.PLUS_CART_ITEM,
    payload: id
})

export const minusCartItem = id => ({
    type: constants.MINUS_CART_ITEM,
    payload: id
})