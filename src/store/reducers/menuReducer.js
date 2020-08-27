const initialState = {
    items: [],
    isLoading: false
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}