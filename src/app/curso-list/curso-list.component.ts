import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  curso:Observable<Curso[]>
  constructor(private servicio:CursoService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){

    this.curso = this.servicio.getCursos()
  }
}
