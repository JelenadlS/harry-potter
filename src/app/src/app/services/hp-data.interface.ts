export class characters {
        id: string;
        name: string;
        alternate_names: [
          string
        ];
        species: string;
        gender: string;
        house: string;
        dateOfBirth: string;
        yearOfBirth: number;
        wizard: boolean;
        ancestry: string;
        eyeColour: string;
        hairColour: string;
        wand: {
          wood: string,
          core: string,
          length: number
        };
        patronus: string;
        hogwartsStudent: boolean;
        hogwartsStaff: boolean;
        actor: string;
        alternate_actors: [
          
        ];
        alive: boolean;
        image: string
}

// export interface characters {
//   id: string,
//   name: string,
//   alternate_names: [
//     string
//   ],
//   species: string,
//   gender: string,
//   house: string,
//   dateOfBirth: string,
//   yearOfBirth: number,
//   wizard: boolean,
//   ancestry: string,
//   eyeColour: string,
//   hairColour: string,
//   wand: {
//     wood: string,
//     core: string,
//     length: number
//   },
//   patronus: string,
//   hogwartsStudent: boolean,
//   hogwartsStaff: boolean,
//   actor: string,
//   alternate_actors: [
    
//   ],
//   alive: boolean,
//   image: string
// }