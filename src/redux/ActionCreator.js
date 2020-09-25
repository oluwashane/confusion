import * as ActionType from "./ActionType";

export const addComment = (dishId, author, rating, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId,
        author,
        rating,
        comment
    }
})