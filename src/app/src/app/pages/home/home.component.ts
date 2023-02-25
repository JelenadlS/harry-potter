import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { dataService } from '../../services/get-data.service';
import { Store } from '@ngrx/store';
import { GetDataAction } from '../../store/actions/get-data.action';
import { Observable } from 'rxjs';
import { increaseListAction } from '../../store/actions/increase-list.action';
import { SelectedHouseAction } from '../../store/actions/filter-house.action';
import { filteredListByHouse } from '../../store/selector/filter-house.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(filteredListByHouse)
  public eachHouseOnce: string[] = [];

  constructor(
    private dataService: dataService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.dataService
      .getCharacters()
      .subscribe((characters: characters[]) =>{
        this.store.dispatch(GetDataAction.retrievedCharacters({characters}));
        this.createEachHouseOnce(characters)
        console.log(characters)
        console.log(...new Set(characters.map(activity =>
          activity.ancestry
        )),)
        console.log(...new Set(characters.map(activity =>
          activity.hogwartsStaff
        )),)
        console.log(...new Set(characters.map(activity =>
          activity.hogwartsStudent
        )),)
        console.log(...new Set(characters.map(activity =>
          activity.species
        )),)
        console.log(...new Set(characters.map(activity =>
          activity.wizard
        )),)
      }
    )
  }

  LoadMoreCharacters() {
    this.store.dispatch(increaseListAction())
  }

  createEachHouseOnce(character: characters[]){
    const houseValueOnce = [
      ...new Set(character.map(activity =>
        activity.house
      )),
    ]
    this.eachHouseOnce = houseValueOnce.filter(entry => entry)
  }

}
