class Caja <O  extends string , U extends number> {                 // clase 
    public contenido : O ;
    constructor (contenido : O ) {
        this.contenido = contenido;

    }
    obtenerContenido () : O {
        return this.contenido;
    }
}
const cajita = new  Caja <string , number> ( "HOLA" );   // objeto , metodo 

console.log(cajita.obtenerContenido());

