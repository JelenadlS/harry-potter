import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectedHouseAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.less']
})
export class FilterBoxComponent implements OnInit {
 @Input() eachHouseOnce: string[] = [];

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  onFilterHouse(house: string) {
    this.store.dispatch(SelectedHouseAction({house}))
  }

}
