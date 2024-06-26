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

    //Agregar Libros

    AgregarLibro(libro: book): void {
        this.Libros.push(libro);
    }

    //Eliminar libros

    EliminarLibro(isbn: string): void {
        for (let i = 0; i < this.Libros.length; i++) {
            if (this.Libros[i].ISBN === isbn) {
                this.Libros.splice(i, 1);
                break; // Termina el bucle una vez encontrado y eliminado el libro
            }
        }
    }

    //Mostrar Libros

    ObtenerLibros(): book[] {
        return this.Libros;
    }
}