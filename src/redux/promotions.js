import * as ActionType from './ActionType';

export const Promotions = (state = {
    isLoading: true,
    errorMessage: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_PROMOS: 
            return { ...state, isLoading: false, errorMessage: null, promotions: action.payload }
        case ActionType.PROMOS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, promotions: [] }
        case ActionType.PROMOS_FAILED: 
            return { ...state, isLoading: false, errorMessage: action.payload, promotions: [] }
        default:
            return state
    }
}
