import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { favoriteCharacters } from '../../store/selector/favorite-characters.selector';
import { Router } from '@angular/router';
import { likedSelector } from '../../store/selector/like.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit {
  public filteredList$:Observable<characters[]> = this.store.select(favoriteCharacters);
  public favoriteList: Observable<string[]> = this.store.select(likedSelector);
  
  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.favoriteList.subscribe((ids:string[]) => {
      if(ids.length === 0) {
        console.log('test')
        this.router.navigate(['/home'])
      }
    })
  }
}
