function login(usuario: string, contraseña: string): string {
    if (usuario !== "" && contraseña.length >= 8) {
        return "Inicio de sesión exitoso";
    } else {
        return "Usuario o contraseña incorrectos";
    }
}

console.log(login("carlos", "12345678")); 
console.log(login("carlos", "")); 
