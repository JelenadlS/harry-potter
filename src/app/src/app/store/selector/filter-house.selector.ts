import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";

export const selectCharacters = createFeatureSelector<characters[]>('characters');
export const selectedHouse = createFeatureSelector<string>('selectedHouse');
export const numberToIncrease = createFeatureSelector<number>('increase');

export const filteredListByHouse = createSelector(
    selectCharacters,
    selectedHouse,
    numberToIncrease,
    (characters: characters[], house: string, increase: number) => {
        let newlyfiltered: characters[] = [];

        if(house !== ''){
            let filteredListeByHouse: characters[] = []
            filteredListeByHouse = characters.filter( (character: characters) => character.house === house)
            newlyfiltered = filteredListeByHouse.slice(0, increase)
        } else {
            newlyfiltered = characters.slice(0, increase)
        }
        
        return newlyfiltered 
    }
  );