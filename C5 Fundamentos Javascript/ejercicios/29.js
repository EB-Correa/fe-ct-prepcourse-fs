function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  let triangulo = base * altura;
  let area = triangulo / 2;
  return area;
}

module.exports = areaDelTriangulo;
console.log (areaDelTriangulo(10,5));