import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { favoriteCharacters } from '../../store/selector/favorite-characters.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(favoriteCharacters);

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }
}
