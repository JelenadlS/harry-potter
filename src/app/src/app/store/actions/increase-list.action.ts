import { createAction, props } from "@ngrx/store";

export const INCREASE = '[Increase] Increase';

export const increaseListAction= createAction(
    INCREASE,
  );