import { createAction, props } from "@ngrx/store";

export const SEARCH = '[SEARCH] Search';


export const SearchAction = createAction(
    SEARCH,
   props<{ name: string }>()
);