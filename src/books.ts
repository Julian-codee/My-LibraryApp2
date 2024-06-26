//Export y creacion de la clase book

export class book {
    ISBN: string;
    Titulo: string;
    Precio: number;
    Stock: number;
    idioma: string;
    AñoPublicacion: Date;

    constructor(ISBN: string, Titulo: string, Precio: number, Stock: number, idioma:string, AñoPublicacion: Date) {
        this.ISBN = ISBN;
        this.Titulo = Titulo;
        this.Precio = Precio;
        this.Stock = Stock;
        this.idioma = idioma;
        this.AñoPublicacion = AñoPublicacion;
    }
}