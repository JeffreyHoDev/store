import { USER_CONSTANT } from './user.constant'

export const DELETE_USER_FROM_DATABASE_START = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_START
})

export const DELETE_USER_FROM_DATABASE_SUCCESS = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_SUCCESS
})

export const DELETE_USER_FROM_DATABASE_FAILED = () => ({
    type: USER_CONSTANT.DELETE_USER_FROM_DATABASE_FAILED
})

export const DELETE_USER_ASYNC = (id) => {
    return dispatch => {
        dispatch(DELETE_USER_FROM_DATABASE_START())
        

    }
}