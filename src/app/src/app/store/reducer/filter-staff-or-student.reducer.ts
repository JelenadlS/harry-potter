import { createReducer, on } from "@ngrx/store";
import { FilterGroupAction } from "../actions/filter-house.action";

export const initialState: string = '';

export const staffOrStudentReducer = createReducer(
    initialState,
    on(FilterGroupAction.staffOrStudent, (state, action) => {
    return state = action.staffOrStudent
    }),
  );