import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterGroupAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-filter-by-ancestry',
  templateUrl: './filter-by-ancestry.component.html',
  styleUrls: ['./filter-by-ancestry.component.less']
})
export class FilterByAncestryComponent implements OnInit {
  @Input() eachAncestryOnce: string[] = [];
  
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  onFilterAncestry(ancestry:string){
    this.store.dispatch(FilterGroupAction.selectedAncestry({ancestry}))
  }
}
