import { createActionGroup, props } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";

export const GetDataAction = createActionGroup({
    source: 'HP API',
    events: {
        'Retrieved characters': props<{ characters: characters[]}>(),
    }
})