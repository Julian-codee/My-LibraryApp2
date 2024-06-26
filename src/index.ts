// main.ts
import { book } from './books';
import { Seccion } from './libreria';
import { libros } from './book';
import promptSync from 'prompt-sync';

const prompt = promptSync();

//Constante de la seccion

const seccionRealismoMagico = new Seccion('Realismo Mágico', 'Sección dedicada a libros del género Realismo Mágico', libros);


//Funcion agregar libros a la lista 
function agregarLibro(): void {
    const ISBN = prompt('Ingrese el ISBN del libro: ');
    const Titulo = prompt('Ingrese el título del libro: ');
    const Precio = parseFloat(prompt('Ingrese el precio del libro: '));
    const Stock = parseInt(prompt('Ingrese el stock del libro: '), 10);
    const idioma = prompt('Ingrese el Idioma del Libro: ');
    const AñoPublicacion = new Date(prompt('Ingrese la fecha de publicación del libro (YYYY-MM-DD): '));

    const libro = new book(ISBN, Titulo, Precio, Stock, idioma, AñoPublicacion);
    seccionRealismoMagico.AgregarLibro(libro);
    console.log('Libro agregado correctamente.');
}

//Funcion Eliminar libros a la lista 

function eliminarLibro(): void {
    const ISBN = prompt('Ingrese el ISBN del libro a eliminar: ');
    seccionRealismoMagico.EliminarLibro(ISBN);
    console.log('Libro eliminado correctamente.');
}

//Funcion ver libros a la lista 

function verLibros(): void {
    const libros = seccionRealismoMagico.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la sección.');
    } else {
        libros.forEach(libro => {
            console.log(`ISBN: ${libro.ISBN},
                Título: ${libro.Titulo},
                Precio: ${libro.Precio},
                Stock: ${libro.Stock},
                Idioma: ${libro.idioma},
                Año de Publicación: ${libro.AñoPublicacion}`);
        });
    }
}

//Funcion Menu (Consola-Terminal)

function menu(): void {
    let opcion: string;
    do {
        console.log('\n--- Menú ---');
        console.log('1. Agregar libro');
        console.log('2. Eliminar libro');
        console.log('3. Ver libros');
        console.log('4. Salir');
        opcion = prompt('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                eliminarLibro();
                break;
            case '3':
                verLibros();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}

menu();
