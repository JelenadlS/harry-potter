import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";
import { filterAncestryRule } from "../rules/filter-ancestry.rule";
import { filterHouseRule } from "../rules/filter-house.rule";

export const selectCharacters = createFeatureSelector<characters[]>('characters');
export const selectedHouse = createFeatureSelector<string>('selectedHouse');
export const selectedAncestry = createFeatureSelector<string>('selectedAncestry');
export const numberToIncrease = createFeatureSelector<number>('increase');

export const filteredListByHouse = createSelector(
    selectCharacters,
    selectedHouse,
    numberToIncrease,
    selectedAncestry,
    (characters: characters[], house: string, increase: number, ancestry: string) => {
        let filteredByHouse: characters[] = [];
        let newlyfiltered: characters[] = []

                filteredByHouse = filterHouseRule(characters, house)
                newlyfiltered = filterAncestryRule(filteredByHouse, ancestry)
        
        newlyfiltered = newlyfiltered.slice(0, increase)
        
        return newlyfiltered 
    }
  );