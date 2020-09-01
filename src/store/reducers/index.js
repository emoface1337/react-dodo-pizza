import { combineReducers } from 'redux'
import { filterReducer } from './filterReducer'
import { menuReducer } from './menuReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
    filterReducer,
    menuReducer,
    cartReducer
})

export default rootReducer