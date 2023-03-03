import { characters } from '../../services/hp-data.interface';

export const filterHouseRuleImplementation = (
    filteredCharacters: characters[],
    filterHouse: string
): characters[] => {
    let filteredListeByHouse:characters[] = filteredCharacters;
    if (filterHouse === '') {
        return filteredListeByHouse;
    }

    filteredListeByHouse = filteredCharacters.filter(
        (character: characters) => character.house === filterHouse
    );
    return filteredListeByHouse;
};


export const filterHouseRule = (
    filteredCharacters: characters[],
    filterHouse: string
) =>
    filterHouseRuleImplementation(
        filteredCharacters,
        filterHouse
    );
