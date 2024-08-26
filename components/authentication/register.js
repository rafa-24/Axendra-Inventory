

// Enviar registro
function register() {

  document.querySelector('.form-register').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los datos del formulario
    const nombreNegocio = document.getElementById('nombreNegocio').value;
    const nombrePersona = document.getElementById('nombrePersona').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const cargo = document.getElementById('cargo').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    /* Armar un objeto que coincida con el Dto */
    const dataNegocio = {
      nombre_negocio: nombreNegocio,
      nombre: nombrePersona,
      apellidos: apellidos,
      telefono: telefono,
      cargo: cargo,
      email: email,
      password: password
    }

    console.log('lo que se envia a backend', dataNegocio);

    // Aquí puedes enviar los datos a la API usando Axios o Fetch
    const response = await axios.post('http://localhost:3000/empresas/registro', dataNegocio);

    if (response.data.succes) {
      // alerta
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: reponse.data.message,
        showConfirmButton: false,
        timer: 1500
      });

      window.location.href = 'https://www.ejemplo.com';

      // redirigir a la pagina de inicio


    }

  });

}


register();
