// crear una clase cuyo metodo sume 3 numeros
//y estos numeros deben ser propios o atributos de la clase 
//utilice el tipo generico para el manejo de variables

class suma < S extends number> {
    public num1: S;
    public num2: S;
    public num3: S;

    constructor (num1 : S ,num2 : S ,num3 : S ,) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    suma () : number {
        return this.num1 + this.num2 +this.num3;
    }
}
    const sumar = new suma (8,9,6);

    console.log(sumar.suma());
