import { Injectable } from "@angular/core";
import { characters } from "./hp-data.interface";


@Injectable({
    providedIn: 'root'
})
export class filterService {
    public eachHouseOnce: string[] = [];

    constructor(){}

    getEachHouseOnce(character: characters[]): string[]{
        const houseValueOnce = [
            ...new Set(character.map(activity =>
              activity.house
            )),
          ]
        this.eachHouseOnce = houseValueOnce.filter(entry => entry)
        console.log(this.eachHouseOnce)
      return this.eachHouseOnce
    }

}
