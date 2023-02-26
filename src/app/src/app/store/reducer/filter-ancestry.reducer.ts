import { createReducer, on } from "@ngrx/store";
import { FilterGroupAction } from "../actions/filter-house.action";

export const initialState: string = '';

export const selectedAncestryReducer = createReducer(
    initialState,
    on(FilterGroupAction.selectedAncestry, (state, action) => {
    return action.value
    })
  );