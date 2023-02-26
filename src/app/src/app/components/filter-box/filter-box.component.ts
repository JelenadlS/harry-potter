import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterGroupAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.less']
})
export class FilterBoxComponent implements OnInit {
  @Input() radios: string[] = [];
  @Input() title: string = '';
  
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  onFilter(value:string, title:string){
    if(title === 'houses'){
      this.store.dispatch(FilterGroupAction.selectedHouse({value}))
    }
    if(title === 'ancestry'){
      this.store.dispatch(FilterGroupAction.selectedAncestry({value}))
    }
    if(title === 'staff or student'){
      this.store.dispatch(FilterGroupAction.staffOrStudent({value}))
    }
  }
}
