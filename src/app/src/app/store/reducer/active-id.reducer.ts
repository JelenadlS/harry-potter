import { createReducer, on } from "@ngrx/store";
import { ActiveIdAction } from "../actions/active-id.action";

export const initialState: string = '';

export const activeIdReducer = createReducer(
    initialState,
    on(ActiveIdAction, (state, action) => {
        if(state === '' || state !== action.id){
            return state = action.id
        }
        if(state === action.id){
           return state = ''
        }
    return state
    }),
  );