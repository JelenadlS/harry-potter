import { characters } from '../../services/hp-data.interface';

export const filterAncestryRuleImplementation = (
    filteredCharacters: characters[],
    filterAncestry: string
): characters[] => {
    let filteredListeByAncestry:characters[] = filteredCharacters;

    if (filterAncestry === '') {
        return filteredListeByAncestry;
    }

    filteredListeByAncestry = filteredCharacters.filter(
        (character: characters) => character.ancestry === filterAncestry
    );

    return filteredListeByAncestry;
};


export const filterAncestryRule = (
    filteredCharacters: characters[],
    filterAncestry: string
) =>
    filterAncestryRuleImplementation(
        filteredCharacters,
        filterAncestry
    );
