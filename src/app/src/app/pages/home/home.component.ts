import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { dataService } from '../../services/get-data.service';
import { Store } from '@ngrx/store';
import { GetDataAction } from '../../store/actions/get-data.action';
import { Observable } from 'rxjs';
import { increaseListAction } from '../../store/actions/increase-list.action';
import { filteredList } from '../../store/selector/filter-characters.selector';
import { filterService } from '../../services/filter.service';
import { increaseSelector } from '../../store/selector/increase.selector';
import { FilterGroupAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(filteredList);
  public filteredList: characters[] = [];
  public eachHouseOnce: string[] = [];
  public eachAncestryOnce: string[] = [];
  public staffOrStudent: string[] = ['staff', 'student'];
  public lengthOfCharactersArray: number = 0;
  public increase: Observable<number> = this.store.select(increaseSelector);

  constructor(
    private dataService: dataService,
    private filterService: filterService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.dataService
      .getCharacters()
      .subscribe((characters: characters[]) =>{
        this.store.dispatch(GetDataAction.retrievedCharacters({characters}));
        this.filterService.getEachHouseOnce(characters)
        this.eachHouseOnce = this.filterService.eachHouseOnce
        this.filterService.getEachAncestryOnce(characters)
        this.eachAncestryOnce = this.filterService.eachAncestryOnce
      }
    )
    this.filteredList$
    .subscribe((characters: characters[]) =>{
        this.lengthOfCharactersArray = characters.length
        this.increase.subscribe((incr: number) => {
          this.filteredList = characters.slice(0, incr)
        })
      }
    )
  }

  public loadMoreCharacters(): void {
    this.store.dispatch(increaseListAction())
  }

  public handleResetFilters(): void {
    this.store.dispatch(FilterGroupAction.selectedHouse({value: ''}))
    this.store.dispatch(FilterGroupAction.selectedAncestry({value: ''}))
    this.store.dispatch(FilterGroupAction.staffOrStudent({value: ''}))
  }

  // Refactor styles, kann man die filter zusammenfassen und nach unten reichen?
  // Ordnerstruktur, check mit dependencyCrwaler
  // Like seite erstellen
  // eine Note zu gelikten sachen hinzufügen
}
