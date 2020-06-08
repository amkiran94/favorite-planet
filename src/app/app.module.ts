import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FavoriteMenuComponent } from './favorite-menu/favorite-menu.component';
import { PlanetsListComponent } from './favorite-menu/planets-list/planets-list.component';
import { FavoritePlanetsComponent } from './favorite-menu/favorite-planets/favorite-planets.component';

const routes: Routes = [
  { path: 'planets-list', component: PlanetsListComponent},
  { path: 'favorite-planets', component: FavoritePlanetsComponent },
  { path: '**', redirectTo:'/planets-list', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FavoriteMenuComponent,
    PlanetsListComponent,
    FavoritePlanetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
