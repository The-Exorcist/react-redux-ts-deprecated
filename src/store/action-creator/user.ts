import { UserAction, UserActionTypes } from "../../types/user"
import {  Dispatch } from "redux"
import axios from "axios"
import type {} from 'redux-thunk/extend-redux';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const delay = 500;
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
            }, delay)
        } catch (e) {
            dispatch({ 
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: "Произошла ошибка при загрузке пользователей" 
            })
        }
    }
}