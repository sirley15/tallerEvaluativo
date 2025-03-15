//funciones clases o componentes
//tipo generico la forma de como 
// debe comportrse una funcion segun su  tipo recibido
//<>

function obtenerContenido <T extends number> (a:T) {
    console.log(`Mi numero es a: ${a}`);
}
obtenerContenido(2);

const sumaNumeros = <N extends number> (num1:N,num2:N) : number  =>  {  //SOLO APLICA PARA FUNCIONES 
    return num1 + num2;
}
console.log(sumaNumeros(3,5));