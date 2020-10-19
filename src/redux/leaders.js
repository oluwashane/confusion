import * as ActionType from "./ActionType"

export const Leaders = (state = {
        isLoading: true,
        errorMessage: null,
        leaders: []
    }, action) => {
    switch (action.type) {
        case ActionType.LEADERS_LOADING:
            return {...state, isLoading: true, errorMessage: null, leaders: []}
        case ActionType.ADD_LEADERS:
            return {...state, isLoading: false, errorMessage: null, leaders: action.payload}
        case ActionType.LEADERS_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload, leaders: []}    
        default:
            return state
    }
}
