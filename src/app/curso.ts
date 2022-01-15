export class Curso{

    id:number;
    nombre: string;
    duracion:string;
    imagen:string;
  
    precio:number;
    categoria:{
        id_categoria:number,
        nom_categoria:string
    }
}