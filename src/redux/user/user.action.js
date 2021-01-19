import { USER_CONSTANT } from './user.constant'

import { RESET_AUTHORIZED } from '../verification/verification.action'

export const DELETE_USER_FROM_DATABASE_START = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_START
})

export const DELETE_USER_FROM_DATABASE_SUCCESS = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_SUCCESS
})

export const DELETE_USER_FROM_DATABASE_FAILED = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_FAILED
})

export const ADD_NEW_USER_START = () => ({
    type: USER_CONSTANT.ADD_NEW_USER_START
})
export const ADD_NEW_USER_SUCCESS = () => ({
    type: USER_CONSTANT.ADD_NEW_USER_SUCCESS
})
export const ADD_NEW_USER_FAILED = (error) => ({
    type: USER_CONSTANT.ADD_NEW_USER_FAILED,
    payload: error
})

export const DELETE_USER_ASYNC = (user_id) => {
    return dispatch => {
        dispatch(DELETE_USER_FROM_DATABASE_START())
        fetch('http://localhost:50000/delete_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': user_id
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 1){
                dispatch(DELETE_USER_FROM_DATABASE_SUCCESS())
                dispatch(RESET_AUTHORIZED())
            }
            else {
                dispatch(DELETE_USER_FROM_DATABASE_FAILED())
            }
        })
        .catch(err => dispatch(DELETE_USER_FROM_DATABASE_FAILED()))

    }
}

export const ADD_NEW_USER_ASYNC = (email, name, role, password) => {
    return dispatch => {
        dispatch(ADD_NEW_USER_START())
        fetch('http://localhost:50000/add_new_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password,
                'role': role
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.name === "error"){
                dispatch(ADD_NEW_USER_FAILED(data.detail))
            }
            else {
                dispatch(ADD_NEW_USER_SUCCESS())
                dispatch(RESET_AUTHORIZED())
            }
        })
        .catch(err => dispatch(ADD_NEW_USER_FAILED(err)))
    }
}