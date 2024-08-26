// Enviar registro
function signIn() {

  document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    /* Armar un objeto que coincida con el Dto */
    const dataUser = {
      email: email,
      password: password
    }

    console.log('lo que se envia a backend', dataUser);

    // Aquí puedes enviar los datos a la API usando Axios o Fetch
    const response = await axios.post('http://localhost:3000/auth/iniciar-sesion', dataUser);
    console.log('respuesta al iniciar sesion', response);


    if(response.data.data !== null) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 3000
      });
      // Redirige a otra página
      window.location.href = 'https://axendrainventory.netlify.app/components/authentication/login';
    }else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Nombre de usuario o contraseña incorrecta intente nuevamente",
        showConfirmButton: false,
        timer: 3000
      });
    }


  });

}

signIn();
