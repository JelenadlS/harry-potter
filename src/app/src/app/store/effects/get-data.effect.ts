import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { dataService } from '../../services/get-data.service';

@Injectable()
export class CharacterEffects {

  loadCharacters$ = createEffect(() => this.actions$.pipe(
    ofType('[HP API] Load Characters'),
    mergeMap(() => this.dataService.getCharacters()
        .pipe( map(characters =>({ type: '[HP API] Characters Loaded Success', payload: characters})),
        catchError(() => of({ type: '[HP API] Movies Loaded Error' }))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private dataService: dataService
  ) {}
}