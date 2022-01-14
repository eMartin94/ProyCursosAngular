export class Curso{

    id:number;
    descripcion: string;
    duracion:string;
    imagen:string;
    nombre:string;
    precio:number;
    categoria:{
        id_categoria:number,
        nom_categoria:string
    }
}