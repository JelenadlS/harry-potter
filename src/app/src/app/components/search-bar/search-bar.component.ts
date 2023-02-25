import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchAction } from '../../store/actions/search.action';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  searchInputHandler(event: Event){
    const input = (event.target as HTMLInputElement).value
    const name = input.toLocaleLowerCase()
    this.store.dispatch(SearchAction({name})) 
  }

  handleOnClickSearch(){
    // this.store.dispatch(FilterGroupAction.selectedHouse({house: ''}))
    // this.store.dispatch(FilterGroupAction.selectedAncestry({ancestry: ''}))
    // this.store.dispatch(FilterGroupAction.staffOrStudent({staffOrStudent: ''}))
  }
}
