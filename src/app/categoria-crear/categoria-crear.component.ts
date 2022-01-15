import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html',
  styleUrls: ['./categoria-crear.component.css']
})
export class CategoriaCrearComponent implements OnInit {
  categoriaNuevo :Categoria = new Categoria();
  constructor(private servicio:CategoriaService,private router:Router) { }

  ngOnInit() {
  }
  save(){
    this.servicio.postCategoria(this.categoriaNuevo)
    .subscribe(data=>{console.log(data)}, error=>console.error(error));
    this.categoriaNuevo = new Categoria();
    this.gotoListadoCategoria();
  }

  gotoListadoCategoria(){
    this.router.navigate(['/categorias'])
  }

  onSubmit(){
    this.save();
  }

}
