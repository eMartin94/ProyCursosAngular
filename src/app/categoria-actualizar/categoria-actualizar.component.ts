import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent implements OnInit {

  id:number;
  categoria:Categoria;
  constructor(private route:ActivatedRoute,private router:Router,private servicioCategoria:CategoriaService) { }

  ngOnInit() {
    this.categoria = new Categoria();
    this.id = this.route.snapshot.params['id'];

    this.servicioCategoria.getCategoriaPorId(this.id).subscribe(
      data=>{console.log(data);this.categoria=data},error=>console.error(error));
      this.categoria = new Categoria();
      
      
  }
  actualizandoCategoria(){
    this.servicioCategoria.putCategoria(this.id,this.categoria)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.categoria=new Categoria();
    
  }
  onSubmit(){
    this.actualizandoCategoria();
    this. gotodasCategorias();
  }
  gotodasCategorias(){
    this.router.navigate(['/categorias'])
  }

}
