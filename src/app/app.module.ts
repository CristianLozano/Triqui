import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';


const appRoutes: Routes = [
  { path: 'Home', component: StartComponent },
  { path: 'Game', component: GameComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
