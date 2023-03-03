import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { likedSelector } from './src/app/store/selector/like.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public title: string = 'harry-potter';
  public favoriteList: Observable<string[]> = this.store.select(likedSelector);
  public lengthOFFavoriteList: number = 0

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.favoriteList.subscribe((ids:string[]) => {
      this.lengthOFFavoriteList = ids.length
    })
  }
}
