import { actionTypes } from "../constants/action-types"

const initalState = {
    products: [],
}
export const productReducer = (state = initalState, { type, payload }) => {

    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state

    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state

    }
}