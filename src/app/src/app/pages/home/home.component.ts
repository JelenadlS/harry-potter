import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { dataService } from '../../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public characters: characters[] = [];

  constructor(
    private dataService: dataService
  ) { }

  ngOnInit(): void {
    this.dataService.getCharacters().subscribe(
      (characters: characters[]) => {
        console.log(characters)
        this.characters = characters
      }
    )
  }

}
