import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { dataService } from '../../services/get-data.service';
import { Store } from '@ngrx/store';
import { GetDataAction } from '../../store/actions/get-data.action';
import { Observable } from 'rxjs';
import { increaseListAction } from '../../store/actions/increase-list.action';
import { filteredListByHouse } from '../../store/selector/filter-characters.selector';
import { filterService } from '../../services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(filteredListByHouse)
  public eachHouseOnce: string[] = [];
  public eachAncestryOnce: string[] = [];

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
  }

  LoadMoreCharacters() {
    this.store.dispatch(increaseListAction())
  }
}
