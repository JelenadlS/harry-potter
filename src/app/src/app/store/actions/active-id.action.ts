import { createAction, props } from "@ngrx/store";

export const ID = '[ACTIVEID] Active Id';


export const ActiveIdAction = createAction(
    ID,
   props<{ id: string }>()
);