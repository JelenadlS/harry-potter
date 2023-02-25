import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterGroupAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-filter-by-house',
  templateUrl: './filter-by-house.component.html',
  styleUrls: ['./filter-by-house.component.less']
})
export class FilterByHouseComponent implements OnInit {
  @Input() eachHouseOnce: string[] = [];

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  onFilterHouse(house: string) {
    this.store.dispatch(FilterGroupAction.selectedHouse({house}))
  }

}
