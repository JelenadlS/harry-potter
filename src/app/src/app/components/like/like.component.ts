import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LikeAction } from '../../store/actions/like.action';
import { likedSelector } from '../../store/selector/like.selector';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.less']
})
export class LikeComponent implements OnInit {
  @Input() handOverId:string = ''; 
  public liked:boolean = false;
  public likedBars$:Observable<string[]> = this.store.select(likedSelector);
  public showTooltip:boolean = false;
  
  constructor(
    private store: Store<{array:string[]}>) { }

  ngOnInit(): void {
    this.likedBars$.subscribe((idArray:string[]) => {
      const found: boolean = idArray.includes(this.handOverId)
        if(found) {
          this.liked = true
        }
        if(!found){
          this.liked = false
        }
    })
    
  }

  public handleLikedBar(id: string): void {
    this.store.dispatch(LikeAction({id}))
  }

}
