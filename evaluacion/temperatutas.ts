
function Temperaturas(ciudades:any) {
  let caliente = ciudades[0];
  let fria = ciudades[0];
  let temperatura = 0;

  for (let i = 0; i < ciudades.length; i++) {
    let ciudad = ciudades[i];
    if (ciudad.temperatura > caliente.temperatura) caliente = ciudad;
    if (ciudad.temperatura < fria.temperatura) fria = ciudad;
    temperatura += ciudad.temperatura;
  }

  return { caliente, fria, promedio: temperatura/ ciudades.length };
}

const  ciudades = [
  { ciudad: 'pasto', temperatura: 16},
  { ciudad: 'ibague', temperatura: 29 },
  { ciudad: 'cucuta', temperatura: 34 },
  { ciudad: 'popayan', temperatura: 32 },
];

const resultado = Temperaturas(ciudades);
console.log(resultado);
