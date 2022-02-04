import { Component, OnInit } from '@angular/core';
//importamos
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categoria: Observable<Categoria[]>;
  constructor(private categoriaservice:CategoriaService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.categoria = this.categoriaservice.getCategoriasList();
  }

  nueva_categoria(){
    this.router.navigate(['/nuevacategoria'])
  }

  actualizar(id:number){
    this.router.navigate(['actualizarCategoria',id]);
  }
  eliminar(id:number){
    this.categoriaservice.deleteCategoria(id).subscribe(data=>console.log(data),error=>console.log(error));
  }
}
