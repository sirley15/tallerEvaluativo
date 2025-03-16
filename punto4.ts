class Repositorio<T> {
    private elementos: T[] = []; 
  
    agregar(elemento: T): void {
      this.elementos.push(elemento); 
    }
    obtener(indice: number): T {
      return this.elementos[indice];
    }
  
    eliminar(indice: number): void {
      this.elementos.splice(indice, 1); 
    }
  }
  const repo = new Repositorio<string>(); 

repo.agregar("Hola");  
repo.agregar("Mundo"); 
repo.agregar("TYPESCRIPT");

console.log(repo.obtener(0));
console.log(repo.obtener(2));  
repo.eliminar(1); 
