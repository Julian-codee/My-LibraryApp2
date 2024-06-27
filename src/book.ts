// books.ts
import { book } from "./books";// Importa la clase book correctamente

export const libros: book[] = [
    new book('ISBN1', 'Cien años de soledad', 19.99, 5, 'Español', new Date('1967-05-30')),
    new book('ISBN2', 'Aura', 15.5, 8, 'Español', new Date('1962-01-01')),
    new book('ISBN3', 'La casa de los espíritus', 12.75, 3, 'Español', new Date('1982-01-01')),
    new book('ISBN4', 'Pedro Páramo', 14.25, 6, 'Español', new Date('1955-01-01')),
    new book('ISBN5', 'La noche de Tlatelolco', 10.0, 10, 'ingles', new Date('1971-01-01')),
];
