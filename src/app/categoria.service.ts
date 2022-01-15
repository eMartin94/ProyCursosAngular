  import { Injectable } from "@angular/core";
  import {HttpClient} from '@angular/common/http';
  import { Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})

  export class CategoriaService{

    private baseUrl = 'http://localhost:8084/cursosweb/rest/categorias/categoria';
    constructor(private http:HttpClient){}
    //listar categorias
    getCategoriasList():Observable<any>{
        return this.http.get(`${this.baseUrl}`);
    }
    //listar categoria por id
    getCategoriaPorId(id:number):Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`)
    }
    //nueva categoria
    postCategoria(categoria:Object):Observable<Object>{
        return this.http.post(`${this.baseUrl}`,categoria);
    }
    //actualizar categoria
    putCategoria(id:number,value:any):Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`,value);
    }
    //eliminar categoria
    deleteCategoria(id:number):Observable<any>{
      return this.http.delete(`${this.baseUrl}/${id}`)
  }
  }