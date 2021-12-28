import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: [
        {id: 1, name: "vazgen"},
        {id: 2, name: "gagik"},
        {id: 3, name: "xachik"},
    ]
}

export const increment = createAction('INCREMENT')
export const dekrement = createAction('DECREMENT')

export default createReducer(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1
    },
    [dekrement()]: function (state) {
        state.count = state.count - 1
    }
})