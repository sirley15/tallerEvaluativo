class Repositorio <T>{
    private elementos: T [] = [];

    agregar(elementos:T):void{
        this.elementos.push(elementos);
    }

}