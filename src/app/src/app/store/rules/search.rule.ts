import { characters } from '../../services/hp-data.interface';

export const searchRuleImplementation = (
    filteredCharacters: characters[],
    searchName: string
): characters[] => {
    let newlySearched: characters[] = [];
        
    newlySearched = filteredCharacters.filter((character: characters) => 
    character.name.toLowerCase().includes(searchName)
    )
   
    return newlySearched 
};


export const searchRule = (
    filteredCharacters: characters[],
    searchName: string
) =>
    searchRuleImplementation(
        filteredCharacters,
        searchName
    );
