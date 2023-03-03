import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActiveIdAction } from '../../store/actions/active-id.action';
import { activeIdSelector } from '../../store/selector/active-id.selector';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.less']
})
export class ContentCardComponent implements OnInit {
  @Input() character: any;
  public active: boolean = false;
  public activeId$:Observable<string> = this.store.select(activeIdSelector);
  public placeholderImage:string = '/./src/assets/images/placeholder_no_image.svg'
  
  constructor(
    private store: Store<{id:string}>
  ) { }

  ngOnInit(): void {
  }

public onShowMoreInfo(id: string): void {
  this.store.dispatch(ActiveIdAction({id}))
    this.activeId$.subscribe((id:string) => {
      if(this.character.id !== id){
         this.active = false
      }
      if(this.character.id === id || this.character.id === ''){
        this.active = true
      }
    })
  }
}
