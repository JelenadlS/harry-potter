import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchAction } from '../../store/actions/search.action';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  @Input() handleResetFilters: () => void;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

 public searchInputHandler(event: Event): void {
    const input = (event.target as HTMLInputElement).value
    const name = input.toLocaleLowerCase()
    this.store.dispatch(SearchAction({name})) 
  }

  public handleOnClickSearch(): void {
    this.handleResetFilters()
  }
}
