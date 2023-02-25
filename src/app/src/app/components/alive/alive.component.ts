import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alive',
  templateUrl: './alive.component.html',
  styleUrls: ['./alive.component.less']
})
export class AliveComponent implements OnInit {
@Input() aliveState:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
