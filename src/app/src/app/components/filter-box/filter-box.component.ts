import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.less']
})
export class FilterBoxComponent implements OnInit {
  @Input() eachHouseOnce: string[] = [];
  @Input() eachAncestryOnce: string[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
