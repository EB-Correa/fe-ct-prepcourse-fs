function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true) {
    return "soy verdadero";
  } else {
    return "Soy falso";
  }
}

module.exports = esVerdadero;
console.log(esVerdadero(1));