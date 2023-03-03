import { createReducer, on } from "@ngrx/store";
import { FilterGroupAction } from "../actions/filter-house.action";
import { SearchAction } from "../actions/search.action";

export const initialState: string = '';

export const searchReducer = createReducer(
    initialState,
    on(SearchAction, (state, action) => {
    return action.name
    }),
  );