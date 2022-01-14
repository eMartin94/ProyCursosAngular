import { Component, OnInit } from '@angular/core';
//importamos
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categoria: Observable<Categoria[]>;
  constructor(private categoriaservice:CategoriaService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.categoria = this.categoriaservice.getCategoriasList();
  }

}
