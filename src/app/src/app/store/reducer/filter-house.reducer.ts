import { createReducer, on } from "@ngrx/store";
import { FilterGroupAction } from "../actions/filter-house.action";

export const initialState: string = '';

export const selectedHouseReducer = createReducer(
    initialState,
    on(FilterGroupAction.selectedHouse, (state, action) => {
    return action.value
    }),
  );