import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-crear',
  templateUrl: './curso-crear.component.html',
  styleUrls: ['./curso-crear.component.css']
})
export class CursoCrearComponent implements OnInit {

  curso:Curso = new Curso();
  constructor(private servicioCurso:CursoService,private router:Router) { }

  ngOnInit() {
  }
  gotodosCursos(){
    this.router.navigate(['/cursos'])
  }

  save(){
    this.servicioCurso.postCurso(this.curso)
    .subscribe(data => console.log(data),error => console.error(error));
    this.curso = new Curso();
    this.gotodosCursos();
    
  }
  onSubmit(){
    this.save();
  }
}
