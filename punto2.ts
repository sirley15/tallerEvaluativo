interface Par < T , U  >{
    valor1: T;
    valor2: U;
}
function concatenacion <T,U> (pares : Par <T,U>):string{
    return pares.valor1 + " " + pares.valor2;
}
const primer : Par <string,number> ={
    valor1:"sirley", valor2: 20
}
console.log(concatenacion(primer));