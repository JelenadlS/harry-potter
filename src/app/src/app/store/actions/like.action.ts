import { createAction, props } from "@ngrx/store";

export const LIKE = '[TOOGLELIKE] Toggle Like';


export const LikeAction = createAction(
    LIKE,
   props<{ id: string }>()
);