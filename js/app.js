function cambiarPantalla(id) {
  // Ocultar todas las pantallas
  document.querySelectorAll('.pantalla').forEach(sec => sec.classList.remove('activa'));
  // Mostrar la seleccionada
  document.getElementById(id).classList.add('activa');
}
