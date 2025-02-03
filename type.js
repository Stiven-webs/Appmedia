  // Función para enviar el formulario y mostrar el mensaje de éxito
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Valida que todos los campos estén llenos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && correo && telefono && mensaje) {
      // Si todo está lleno, muestra el mensaje de éxito
      document.getElementById('successMessage').style.display = 'block';
      
      // Limpia el formulario después de mostrar el mensaje
      document.getElementById('contactForm').reset();
    }
  });

  // Función para limpiar el formulario y ocultar el mensaje de éxito
  function limpiarFormulario() {
    // Limpiar el formulario
    document.getElementById('contactForm').reset();

    // Ocultar el mensaje de éxito
    document.getElementById('successMessage').style.display = 'none';
  }





