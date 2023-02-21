import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.less']
})
export class ContentCardComponent implements OnInit {
  @Input() character: any;
  public active: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onShowMoreInfo(){
     this.active = !this.active
  }

}
