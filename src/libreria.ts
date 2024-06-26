//Importacion Book
import { book } from "./books";

//Export y creacion de la clase seccion
export class Seccion {
    Nombre: string;
    Descripcion: string;
    Libros: book[] = [];

    constructor(Nombre: string, Descripcion: string) {
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
    }

    AgregarLibro(libro: book): void {
        this.Libros.push(libro);
    }

    EliminarLibro(isbn: string): void {
        this.Libros = this.Libros.filter(libro => libro.ISBN !== isbn);
    }

    ObtenerLibros(): book[] {
        return this.Libros;
    }
}