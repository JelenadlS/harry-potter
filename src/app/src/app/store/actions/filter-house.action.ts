import { createAction, props } from "@ngrx/store";

export const SELECTEDHOUSE = '[SELECTEDHOUSE] Selected House';


export const SelectedHouseAction = createAction(
    SELECTEDHOUSE,
   props<{ house: string }>()
);