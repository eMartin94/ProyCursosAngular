import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Curso } from "./curso";

@Injectable({
    providedIn:'root'
})
export class CursoService{

    private url = 'http://localhost:8083/rest/cursos';

    constructor(private http:HttpClient){ }

    //listar todos los cursos
    getCursos():Observable<any>{
        return this.http.get(`${this.url}`);
    }

}