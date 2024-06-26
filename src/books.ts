//Export y creacion de la clase book

export class book {
    ISBN: string;
    Titulo: string;
    Precio: number;
    Stock: number;
    AñoPublicacion: Date;

    constructor(ISBN: string, Titulo: string, Precio: number, Stock: number, AñoPublicacion: Date) {
        this.ISBN = ISBN;
        this.Titulo = Titulo;
        this.Precio = Precio;
        this.Stock = Stock;
        this.AñoPublicacion = AñoPublicacion;
    }
}