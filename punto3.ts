function filtrar <T extends string> (arreglo: T [], criterio: T ) {
     let arregloN: string [] = [];

     arreglo.forEach((index) => {
        if (index === criterio) {
            arregloN.push(index);
        }
     })

     return arregloN;
}

console.log(filtrar(["a","b","c"],"c"));