import { Component, Input, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.less']
})
export class ContentCardComponent implements OnInit {
  @Input() character: any;

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.character)
  }

}
