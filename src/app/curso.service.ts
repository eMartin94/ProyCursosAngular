import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Curso } from "./curso";

@Injectable({
    providedIn:'root'
})
export class CursoService{

    private url = 'http://localhost:8084/cursosweb/rest/cursos/curso';

    constructor(private http:HttpClient){ }

    //listar todos los cursos
    getCursos():Observable<any>{
        return this.http.get(`${this.url}`);
    }

    getCursoPorId(id:number):Observable<any>{
        return this.http.get(`${this.url}/${id}`)
    }

    postCurso(curso:Object):Observable<Object>{
        return this.http.post(`${this.url}`,curso)
    }
    putCurso(id:number,curso:Object):Observable<Object>{
        return this.http.put(`${this.url}/${id}`,curso);
    }
    deleteCurso(id:number):Observable<any>{
        return this.http.delete(`${this.url}/${id}`)
    }

}