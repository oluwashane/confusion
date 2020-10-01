import * as ActionType from "./ActionType";

export const Dishes = (state = {
        isLoading: true,
        errormessage: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        case ActionType.DISHES_LOADING:
            return {...state, isLoading: true, errormessage: null, dishes: []}
        case ActionType.ADD_DISHES:
            return {...state, isLoading: false, errormessage: null, dishes: action.payload}
        case ActionType.DISHES_FAILED:
            return {...state, isLoading: false, errormessage: action.payload, dishes: []}
        default:
            return state
    }
}
