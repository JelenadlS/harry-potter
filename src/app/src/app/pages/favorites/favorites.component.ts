import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filteredList } from '../../store/selector/filter-characters.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(filteredList);
  public filteredList: characters[] = [];

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.filteredList$
    .subscribe((characters: characters[]) =>{
      console.log(characters)
          this.filteredList = characters
      }
    )
  }
}
