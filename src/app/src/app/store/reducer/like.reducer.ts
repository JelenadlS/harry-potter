import { createReducer, on } from "@ngrx/store";
import { LikeAction } from "../actions/like.action";

export const initialState: string[] = [];

export const likeReducer = createReducer(
    initialState,
    on(LikeAction, (state, action) => {
    const characterId: string = action.id;
    const entriesClone: string[] = JSON.parse(JSON.stringify(state));
    const found = entriesClone.find(id=> id == characterId);

    if(!found){
        entriesClone.push(characterId);
    } 

    if (found) {
        const index = state.indexOf(found, 0);
        entriesClone.splice(index, 1)
    }
    
    return entriesClone
    }),
  );