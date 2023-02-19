import { Component, OnInit } from '@angular/core';
import { characters } from '../../services/hp-data.interface';
import { dataService } from '../../services/get-data.service';
import { Store } from '@ngrx/store';
import { GetDataAction } from '../../store/actions/get-data.action';
import { selectCharacters } from '../../store/selector/get-data.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public characters$: Observable<characters[]> = this.store.select(selectCharacters);

  constructor(
    private dataService: dataService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.dataService
      .getCharacters()
      .subscribe((characters: characters[]) =>
        this.store.dispatch(GetDataAction.retrievedCharacters({characters}))
    )
  }

}
