import { constants } from '../constants'

export const addItemToCart = item => ({
    type: constants.ADD_ITEM_TO_CART,
    payload: item
})