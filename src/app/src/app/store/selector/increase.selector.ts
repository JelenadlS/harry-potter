import { createFeatureSelector, createSelector } from "@ngrx/store";

export const increaseSelector = createSelector(
    createFeatureSelector('increase'),
    (increase: number) => increase

);