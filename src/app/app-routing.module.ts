import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CursoListComponent } from './curso-list/curso-list.component';



const routes: Routes = [
  //agregamos las rutas
  {path:'', redirectTo:'categoria',pathMatch:'full'},
  {path:'categorias',component:CategoriaListComponent},
  {path:'cursos',component:CursoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
