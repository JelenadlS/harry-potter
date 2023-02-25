import { Injectable } from "@angular/core";
import { characters } from "./hp-data.interface";


@Injectable({
    providedIn: 'root'
})
export class filterService {
    public eachHouseOnce: string[] = [];
    public eachAncestryOnce: string[] = []

    constructor(){}

    getEachHouseOnce(character: characters[]): string[]{
        const houseValueOnce = [
            ...new Set(character.map(activity =>
              activity.house
            )),
          ]
        this.eachHouseOnce = houseValueOnce.filter(entry => entry)
      return this.eachHouseOnce
    }

    getEachAncestryOnce(characters: characters[]): string[]{
      const ancestryValueOnce = [
          ...new Set(characters.map(activity =>
            activity.ancestry
          )),
        ]
      this.eachAncestryOnce = ancestryValueOnce.filter(entry => entry)
    return this.eachAncestryOnce
  }

}
