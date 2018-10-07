import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameEditComponent } from './game-edit/game-edit.component';


const appRoutes: Routes = [
  { path: 'View', component: ViewComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'games/new' , component: GameNewComponent},
  { path: 'games/:id', component: GameEditComponent }
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SearchComponent,
    NavbarComponent,
    GameNewComponent,
    GameEditComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
