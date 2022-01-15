import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaActualizarComponent } from './categoria-actualizar/categoria-actualizar.component';
import { CategoriaCrearComponent } from './categoria-crear/categoria-crear.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CursoActualizarComponent } from './curso-actualizar/curso-actualizar.component';
import { CursoCrearComponent } from './curso-crear/curso-crear.component';
import { CursoListComponent } from './curso-list/curso-list.component';



const routes: Routes = [
  //agregamos las rutas
  {path:'', redirectTo:'categoria',pathMatch:'full'},
  {path:'categorias',component:CategoriaListComponent},
  {path:'nuevacategoria',component:CategoriaCrearComponent},
<<<<<<< HEAD
  {path:'actualizar/:id',component:CategoriaActualizarComponent},
=======
  {path:'actualizarCategoria/:id ', component:CategoriaActualizarComponent},
>>>>>>> acbd7f2538a5f59f3e16cfd6b8d4c50954d42247


  {path:'cursos',component:CursoListComponent},
  {path:'nuevoCurso',component:CursoCrearComponent},
  {path:'actualizarCurso/:id',component:CursoActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
