import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-further-info',
  templateUrl: './further-info.component.html',
  styleUrls: ['./further-info.component.less']
})
export class FurtherInfoComponent implements OnInit {
  @Input() character:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.character)
  }

}
