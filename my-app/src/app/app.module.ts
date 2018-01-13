import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { FormsModule } from '@angular/forms';
import { NotaComponent } from './nota/nota.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
