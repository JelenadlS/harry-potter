import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-button',
  templateUrl: './show-more-button.component.html',
  styleUrls: ['./show-more-button.component.less']
})
export class ShowMoreButtonComponent implements OnInit {
  @Input() character: any;
  public active: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showFurtherInfo(){
    this.active = !this.active
  }
}
