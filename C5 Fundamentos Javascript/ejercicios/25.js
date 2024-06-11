function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  let identificacion = nombre + " " + apellido;
  return identificacion;
}

module.exports = combinarNombres;
console.log (combinarNombres("Emiliano","Correa"));