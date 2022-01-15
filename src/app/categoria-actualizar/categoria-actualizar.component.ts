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

<<<<<<< HEAD
  categoria:Categoria;
  id:number;
  constructor(private route:ActivatedRoute,private router:Router,private servicioCategoria:CategoriaService) { }
=======
  id: number;
  categoria: Categoria;
  constructor(private route: ActivatedRoute, private router: Router, 
    private servicioCategoria: CategoriaService) { }
>>>>>>> acbd7f2538a5f59f3e16cfd6b8d4c50954d42247

  ngOnInit() {
    this.categoria = new Categoria();
    this.id = this.route.snapshot.params['id'];
<<<<<<< HEAD
    this.servicioCategoria.getCategoriaPorId(this.id)
    .subscribe(data=>{console.log(data);this.categoria=data},error=>console.log(error));
    this.categoria= new Categoria();
=======

    this.servicioCategoria.getCategoriaPorId(this.id)
      .subscribe(data => { 
        console.log(data); 
        this.categoria = data 
      }, error => console.log(error));
      
    /* this.categoria = new Categoria(); */
>>>>>>> acbd7f2538a5f59f3e16cfd6b8d4c50954d42247
  }
  actualizandoCategoria() {
    this.servicioCategoria.putCategoria(this.id, this.categoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categoria = new Categoria();
    
  }
  onSubmit() {
    this.actualizandoCategoria();
    this.gotodasCategorias();
  }
  gotodasCategorias() {
    this.router.navigate(['/categorias'])
  }

}
