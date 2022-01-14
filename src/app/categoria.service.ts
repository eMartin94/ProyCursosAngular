  import { Injectable } from "@angular/core";
  import {HttpClient} from '@angular/common/http';
  import { Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})

  export class CategoriaService{

    private baseUrl = 'http://localhost:8083/rest/categorias';
    constructor(private http:HttpClient){}
    //listar categorias
    getCategoriasList():Observable<any>{
        return this.http.get(`${this.baseUrl}`);
    }
  }