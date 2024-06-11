function esNumeroEntero(numero) {
 
  if (numero === Math.floor(numero)) {
  
    return true;
  } else {
    
    return false;
  }
} 
console.log(esNumeroEntero(23.56))

module.exports = esNumeroEntero;