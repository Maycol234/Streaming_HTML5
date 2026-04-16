function mostrarSeccion(id) {
  document.querySelectorAll('.pantalla').forEach(sec => sec.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}
