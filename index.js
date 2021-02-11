const boton = document.getElementById('modificar');

boton.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;

  document.getElementById('resultado').innerHTML = nombre;
})