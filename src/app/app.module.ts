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
import { ShowMoreButtonComponent } from './src/app/components/show-more-button/show-more-button.component';
import { activeIdReducer } from './src/app/store/reducer/active-id.reducer';
import { FurtherInfoComponent } from './src/app/components/further-info/further-info.component';
import { selectedHouseReducer } from './src/app/store/reducer/filter-house.reducer';
import { FilterBoxComponent } from './src/app/components/filter-box/filter-box.component';
import { FilterByHouseComponent } from './src/app/components/filter-by-house/filter-by-house.component';
import { FilterByAncestryComponent } from './src/app/components/filter-by-ancestry/filter-by-ancestry.component';
import { selectedAncestryReducer } from './src/app/store/reducer/filter-ancestry.reducer';
import { FilterByStaffOrStudentComponent } from './src/app/components/filter-by-staff-or-student/filter-by-staff-or-student.component';
import { staffOrStudentReducer } from './src/app/store/reducer/filter-staff-or-student.reducer';
import { searchReducer } from './src/app/store/reducer/search.reducer';
import { SearchBarComponent } from './src/app/components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent, 
    HomeComponent, 
    ContentCardComponent, 
    AliveComponent, 
    LikeComponent, 
    ShowMoreButtonComponent, 
    FurtherInfoComponent, 
    FilterBoxComponent, 
    FilterByHouseComponent, 
    FilterByAncestryComponent, 
    FilterByStaffOrStudentComponent, 
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    StoreModule.forRoot({
      characters: getDataReducer,
      increase: increaseListReducer,
      likedCharacters: likeReducer,
      activeId: activeIdReducer,
      selectedHouse: selectedHouseReducer,
      selectedAncestry: selectedAncestryReducer,
      staffOrStudent: staffOrStudentReducer,
      search: searchReducer,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CharacterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
