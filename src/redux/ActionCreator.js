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
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error("Error" + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        }, error => {
            const errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)))
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
        .then(response => {
            if (response.ok) {
                return response
            } else {
                const error = new Error("Error" + response.status + ": " + response.statusText)
                error.response = response
                throw error;
            }
        }, error => {
            const errorMessage = new Error(error.message)
            throw errorMessage
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)))
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
        .then(response => {
            if (response.ok) {
                return response
            } else {
                const err = new Error("Error" + response.status + ": " + response.statusText)
                err.response = response;
                throw err
            }
        }, error => {
            const errorMess = new Error(error.message)
            throw errorMess 
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromotions(promos)))
        .catch(err => dispatch(promotionsFailed(err.message)))
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
