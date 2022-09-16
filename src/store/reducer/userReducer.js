import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_REQUEST_SUCCESS,
    GET_USER_DETAILS_REQUEST_FAIL,
    USER_LOGOUT
} from '../Constant/userConstantn'

export const userReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {
        case GET_USER_DETAILS_REQUEST: return { ...state, isLoading: true }
        case GET_USER_DETAILS_REQUEST_SUCCESS: return { ...state, isLoading: false, users: payload }
        case GET_USER_DETAILS_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }
        case USER_LOGOUT: return {}

        default: return state

    }
}