import { characters } from '../../services/hp-data.interface';

export const filterStaffOrStudentRuleImplementation = (
    filteredCharacters: characters[],
    filterStaffOrStudent: string
): characters[] => {
    let filteredListe:characters[] = filteredCharacters;
    if (filterStaffOrStudent === '') {
        return filteredListe;
    }
    if (filterStaffOrStudent === 'staff') {
        filteredListe = filteredCharacters.filter(
            (character: characters) => character.hogwartsStaff
        )
    }
    if (filterStaffOrStudent === 'student') {
        filteredListe = filteredCharacters.filter(
            (character: characters) => character.hogwartsStudent
        )
    }
   
    return filteredListe;
};


export const filterStaffOrStudentRule = (
    filteredCharacters: characters[],
    filterStaffOrStudent: string
) =>
    filterStaffOrStudentRuleImplementation(
        filteredCharacters,
        filterStaffOrStudent
    );
