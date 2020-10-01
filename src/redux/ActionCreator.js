import * as ActionType from "./ActionType";
import { baseUrl } from '../shared/baseUrl'

export const addComment = (dishId, author, rating, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId,
        author,
        rating,
        comment
    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishesFailed = (errormessage) => ({
    type: ActionType.DISHES_FAILED,
    payload: errormessage
})

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (errorMessage) => ({
    type:ActionType.COMMENTS_FAILED,
    payload: errorMessage
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + "promotions")
        .then(response => response.json())
        .then(promos => dispatch(addPromotions(promos)))
}

export const promosLoading = () => ({
    type: ActionType.PROMOS_LOADING
})

export const addPromotions = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
})

export const promotionsFailed = (errorMessage) => ({
    type: ActionType.PROMOS_FAILED,
    payload: errorMessage
}) 
