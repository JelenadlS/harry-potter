import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './src/app/components/navigation/navigation.component';
import { HomeComponent } from './src/app/pages/home/home.component';
import { ContentCardComponent } from './src/app/components/content-card/content-card.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { getDataReducer } from './src/app/store/reducer/get-data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './src/app/store/effects/get-data.effect';
import { increaseListReducer } from './src/app/store/reducer/increase-list.reducer';
import { AliveComponent } from './src/app/components/alive/alive.component';
import { likeReducer } from './src/app/store/reducer/like.reducer';
import { LikeComponent } from './src/app/components/like/like.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent, 
    HomeComponent, 
    ContentCardComponent, 
    AliveComponent, LikeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    StoreModule.forRoot({
      characters: getDataReducer,
      increase: increaseListReducer,
      likedCharacters: likeReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CharacterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
