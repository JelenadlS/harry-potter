import { createAction, createActionGroup, props } from "@ngrx/store";

export const SELECTEDHOUSE = '[SELECTEDHOUSE] Selected House';
export const SELECTEDANCESTRY = '[SELECTEDANCESTRY] Selected Ancestry';


export const FilterGroupAction = createActionGroup({
    source: 'filter',
    events: {
        'Selected House': props<{ house: string }>(),
    },
});
