
class Coleccion < C extends number> {  //EL EXTENDS ES BUENO USARLO PERO NO CASI SIEMPRE 
        public elementos : C [] = [];

        agregar (valor : C) : void {
            this.elementos.push(valor)
        }
    obtener(a : C) : C {              // EN LA CLASES NO, (num1:N,num2:N) : number  =>  { 
        return this.elementos [a] 
    }
    obtenerArreglo() : C []{
        return this.elementos; 
    }
    
}
const dato = new Coleccion ();

console.log(dato.agregar(2));
console.log(dato.agregar(3));
console.log(dato.agregar(4));
console.log(dato.obtener(0));
console.log(dato.obtenerArreglo());
