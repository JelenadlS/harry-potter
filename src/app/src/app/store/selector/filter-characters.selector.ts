import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";
import { filterAncestryRule } from "../rules/filter-ancestry.rule";
import { filterHouseRule } from "../rules/filter-house.rule";
import { filterStaffOrStudentRule } from "../rules/filter-staff-or-student.rule";
import { searchRule } from "../rules/search.rule";

export const selectCharacters = createFeatureSelector<characters[]>('characters');
export const selectedHouse = createFeatureSelector<string>('selectedHouse');
export const selectedAncestry = createFeatureSelector<string>('selectedAncestry');
export const numberToIncrease = createFeatureSelector<number>('increase');
export const selectedStaffOrStudent = createFeatureSelector<string>('staffOrStudent');
export const searchName = createFeatureSelector<string>('search');

export const filteredList = createSelector(
    selectCharacters,
    selectedHouse,
    numberToIncrease,
    selectedAncestry,
    selectedStaffOrStudent,
    searchName,
    (characters: characters[], house: string, increase: number, ancestry: string, staffOrStudent: string, search: string) => {
        let filteredByHouse: characters[] = [];
        let filteredByAncestry: characters[] = [];
        let filteredByStaffOrStudent: characters[] = [];
        let newlyfiltered: characters[] = []

                filteredByHouse = filterHouseRule(characters, house)
                filteredByAncestry = filterAncestryRule(filteredByHouse, ancestry)
                filteredByStaffOrStudent = filterStaffOrStudentRule(filteredByAncestry, staffOrStudent)
        
                newlyfiltered = searchRule(filteredByStaffOrStudent, search)

        return newlyfiltered 
    }
  );