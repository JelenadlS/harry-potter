import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';     
import { FavoritesComponent } from './app/pages/favorites/favorites.component'; 

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }