import axios from 'axios'
import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_REQUEST_SUCCESS,
    GET_USER_DETAILS_REQUEST_FAIL,
    USER_LOGOUT
} from '../Constant/userConstantn'

export const userLoginAction = (username) => async (dispatch) => {
    console.log(username);

    try {

        dispatch({ type: GET_USER_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.github.com/users/${username}`)
        localStorage.setItem("task", JSON.stringify(data))
        // console.log(data);
        dispatch({ type: GET_USER_DETAILS_REQUEST_SUCCESS, payload: data })


    } catch (error) {

        dispatch({ type: GET_USER_DETAILS_REQUEST_FAIL, payload: error })
    }
}
export const userLogoutAction = (username) => async (dispatch) => {

    localStorage.removeItem("task")
    dispatch({ type: USER_LOGOUT })


}