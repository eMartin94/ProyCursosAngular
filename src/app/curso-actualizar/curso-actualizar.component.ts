import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-actualizar',
  templateUrl: './curso-actualizar.component.html',
  styleUrls: ['./curso-actualizar.component.css']
})
export class CursoActualizarComponent implements OnInit {

  id:number;
  curso:Curso;
  constructor(private servicioCurso:CursoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.curso = new Curso();
    this.id = this.route.snapshot.params['id'];
    this.servicioCurso.getCursoPorId(this.id)
    .subscribe(data=>{console.log(data);this.curso=data},error=>console.log(error));
    this.curso= new Curso();
  }

}
