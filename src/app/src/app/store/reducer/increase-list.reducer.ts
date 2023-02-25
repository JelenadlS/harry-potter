import { createReducer, on } from "@ngrx/store";
import { increaseListAction } from "../actions/increase-list.action";

export const initialState: number = 4;

export const increaseListReducer = createReducer(
  initialState,
  on(increaseListAction, (_state, number) => _state + 3
)
);



