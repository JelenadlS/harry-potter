import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";

export const selectCharacters = createFeatureSelector<characters[]>('characters');
export const favorites= createFeatureSelector<string[]>('likedCharacters');

export const favoriteCharacters = createSelector(
    selectCharacters,
    favorites,
    (characters: characters[], favorites: string[]) => {
        let newlyfiltered: characters[] = []
        let foundCharacter:any

        for(let i= 0; i < favorites.length; i++){
            foundCharacter = characters.filter(
                (character: characters) => {
                   return character.id === favorites[i]
                })
            newlyfiltered.push(foundCharacter[0])
        }

        return newlyfiltered 
    }
  );