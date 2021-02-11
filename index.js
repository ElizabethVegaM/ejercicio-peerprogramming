const boton = document.getElementById('modificar');

boton.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  for (let i = 0; i < nombre.length; i++) { 
    console.log(nombre[i]);
    document.getElementById('resultado').innerHTML += `<li>${nombre[i]}</li>`;
  }
  
})