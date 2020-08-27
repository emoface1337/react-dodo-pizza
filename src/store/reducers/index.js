import { combineReducers } from "redux"
import { filterReducer } from './filterReducer'
import { menuReducer } from "./menuReducer"

const rootReducer = combineReducers({
    filterReducer,
    menuReducer
})

export default rootReducer