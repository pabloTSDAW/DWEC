import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServicioService} from './servicio.service';
import { CharactersComponent } from './characters/characters.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { CompaniesComponent } from './companies/companies.component';
import { GamesComponent } from './games/games.component';
import { FiltroPipe } from './filtro.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'singleCharacter', component: SingleCharacterComponent},
  {path: 'platforms', component: CompaniesComponent},
  {path: 'games', component: GamesComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PageNotFoundComponent,
    HomeComponent,
    CharactersComponent,
    SingleCharacterComponent,
    CompaniesComponent,
    GamesComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
