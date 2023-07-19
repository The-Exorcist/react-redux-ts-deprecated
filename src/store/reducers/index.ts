import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootRedcuer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})

export  type RootState = ReturnType<typeof rootRedcuer>