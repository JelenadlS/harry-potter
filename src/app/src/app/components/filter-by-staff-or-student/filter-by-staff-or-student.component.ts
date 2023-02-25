import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterGroupAction } from '../../store/actions/filter-house.action';

@Component({
  selector: 'app-filter-by-staff-or-student',
  templateUrl: './filter-by-staff-or-student.component.html',
  styleUrls: ['./filter-by-staff-or-student.component.less']
})
export class FilterByStaffOrStudentComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  onFilterStaffOrStudent(staffOrStudent: string) {
    this.store.dispatch(FilterGroupAction.staffOrStudent({staffOrStudent}))
  }

}

