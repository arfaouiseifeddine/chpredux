import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from "../constants/actionTypes"

export const addTodo = (newTask) => {
    return {
        type:ADD_TODO, payload: newTask,

    }
}

export const editTodo = (p) => {
    return {
        type:EDIT_TODO, payload: p,

    }
}
export const deleteTodo = (id) => {
    return {
        type:DELETE_TODO, payload: id,

    }
}

export const completeTodo = (id) => {
    return {
        type:COMPLETE_TODO, payload: id,

    }
}