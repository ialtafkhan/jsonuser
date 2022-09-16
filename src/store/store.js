import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from './reducer/userReducer'

const LocalLogin = localStorage.getItem("task")
    ? { users: JSON.parse(localStorage.getItem("task")) }
    : {}

const rootReducer = combineReducers({
    userData: userReducer
})
const initialstate = {

    userData: LocalLogin
}

const store = createStore(
    rootReducer,
    initialstate,
    composeWithDevTools
        (applyMiddleware
            (thunk)
        ))


export default store;