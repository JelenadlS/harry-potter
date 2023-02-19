import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './src/app/components/navigation/navigation.component';
import { HomeComponent } from './src/app/pages/home/home.component';
import { ContentCardComponent } from './src/app/components/content-card/content-card.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent, ContentCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
