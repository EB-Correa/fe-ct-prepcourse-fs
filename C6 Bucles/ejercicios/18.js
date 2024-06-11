function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  const inicio = Math.min (a,b);
  const final = Math.max (a,b);
  for (let i = inicio; i <= final; i++) {
    producto *= i;
  } return producto;
}

module.exports = productoEntreNúmeros;
console.log(productoEntreNúmeros(-2,2));