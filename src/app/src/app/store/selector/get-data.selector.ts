import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";
import { increaseListReducer } from "../reducer/increase-list.reducer";

export const selectCharacters = createFeatureSelector<characters[]>('characters');
export const numberToIncrease = createFeatureSelector<number>('increase');

export const selectOnlySomeCharacters = createSelector(
    selectCharacters,
    numberToIncrease,
    (state: characters[], increase: number) => state.slice(0, increase)
  );