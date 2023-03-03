import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterGroupAction } from '../../store/actions/filter-house.action';
import { selectedAncestry, selectedHouse, selectedStaffOrStudent } from '../../store/selector/filter-characters.selector';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.less']
})
export class FilterBoxComponent implements OnInit {
  @Input() radios: string[] = [];
  @Input() title: string = '';
  public radioActive: string = '';
  public selectedHouse = this.store.select(selectedHouse)
  public selectedAncestry = this.store.select(selectedAncestry)
  public selectedStaffOrStudent = this.store.select(selectedStaffOrStudent)
  
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.selectedHouse.subscribe((value:string)=>{
      if(value === ''){
        this.radioActive = ''
      }
    })
    this.selectedAncestry.subscribe((value:string)=>{
      if(value === ''){
        this.radioActive = ''
      }
    })
    this.selectedStaffOrStudent.subscribe((value:string)=>{
      if(value === ''){
        this.radioActive = ''
      }
    })
  }

  public onFilter(value:string, title:string): void{
    if(title === 'houses'){
      this.store.dispatch(FilterGroupAction.selectedHouse({value}))
      this.radioActive = value
    }
    if(title === 'ancestry'){
      this.store.dispatch(FilterGroupAction.selectedAncestry({value}))
      this.radioActive = value
    }
    if(title === 'staff or student'){
      this.store.dispatch(FilterGroupAction.staffOrStudent({value}))
      this.radioActive = value
    }
  }
}
