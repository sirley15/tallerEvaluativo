function calcularIMC(peso: number, altura: number): string {
    const imc = peso / (altura * altura);
    let categoria: string;

    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    return (`Tu IMC es ${imc.toFixed(2)} y tu categoría es: ${categoria}`);
}

console.log(calcularIMC(49, 1.61));