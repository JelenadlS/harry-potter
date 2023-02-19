import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor(
    private store: Store<{array:string[]}>) { }

  ngOnInit(): void {
  }

  handleLikedBar(id: string): boolean {
    this.store.dispatch(LikeAction({id}))
    const likedBars$ = this.store.select(likedSelector)
    likedBars$.subscribe((idArray:string[]) => {
        const found: boolean = idArray.includes(id)    
          if(found) {
            this.liked = true
          }
          if(!found){
            this.liked = false
          }
    }
    )
  return this.liked
  }

}
