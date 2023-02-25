import { createReducer, on } from "@ngrx/store";
import { SelectedHouseAction } from "../actions/filter-house.action";

export const initialState: string = '';

export const selectedHouseReducer = createReducer(
    initialState,
    on(SelectedHouseAction, (state, action) => {
    return action.house
    }),
  );