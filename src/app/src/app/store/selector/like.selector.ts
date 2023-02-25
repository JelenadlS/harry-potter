import { createFeatureSelector, createSelector } from "@ngrx/store";

export const likedSelector = createSelector(
    createFeatureSelector('likedCharacters'),
    (likedIds: string[]) => likedIds

);