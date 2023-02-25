import { createFeatureSelector, createSelector } from "@ngrx/store";

export const activeIdSelector = createSelector(
    createFeatureSelector('activeId'),
    (activeId: string) => activeId

);