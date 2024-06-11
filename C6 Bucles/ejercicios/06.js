function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let numstr = Math.abs(num).toString(); {
    return numstr.length ===3;
  } 
}

module.exports = tieneTresDigitos;
console.log(tieneTresDigitos(23));