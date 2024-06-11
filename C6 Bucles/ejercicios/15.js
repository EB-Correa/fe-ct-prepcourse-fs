function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  const diasDeLaSemana = {
    1: "lunes",
    2: "Martes",
    3: "Miercoles",
    4: "jueves",
    5: "Viernes",
    6: "Sabado",
    7: "Domingo"
  }; return diasDeLaSemana[numero] || "No es un dia de la semana";
}

module.exports = obtenerDiaSemana;
console.log(obtenerDiaSemana("8"));