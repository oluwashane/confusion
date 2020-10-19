import * as ActionType from './ActionType';

export const Comments = (state = {
    errorMessage: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_COMMENTS: 
            return {...state, errorMessage: null, comments: action.payload}
        case ActionType.COMMENTS_FAILED:
            return {...state, errorMessage: action.payload, comments: []}
        case ActionType.ADD_COMMENT:
            const comment = action.payload
            return { ...state, comments: state.comments.concat(comment)}
        default:
            return state
    }
}
