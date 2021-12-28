import {combineReducers, configureStore} from '@reduxjs/toolkit'
import toolkitReducers from "./toolkitReducers";

const rootReducer = combineReducers({
    toolkit:toolkitReducers
})

export const store =configureStore ({
    reducer:rootReducer,

})

