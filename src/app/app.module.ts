import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
//importamos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CategoriaCrearComponent } from './categoria-crear/categoria-crear.component';
import { CategoriaActualizarComponent } from './categoria-actualizar/categoria-actualizar.component';

@NgModule({
  declarations: [
    //agregamos
    AppComponent,
    CategoriaListComponent,
    CursoListComponent,
    CategoriaCrearComponent,
    CategoriaActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
