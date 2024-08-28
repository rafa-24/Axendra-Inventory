const dbInventory = [];

// Agregar productos
function addProducts() {
  const boton = document.getElementById('agregar-productos');

  boton.onclick = function () {
    Swal.fire({
      title: 'Agregar Producto',
      html: `
            <form id="formularioProducto">
                <input type="text" id="codigo_producto" class="swal2-input" placeholder="Código del Producto">
                <input type="text" id="descripcion_producto" class="swal2-input" placeholder="Descripción del Producto">
                <input type="number" id="precio_producto" class="swal2-input" placeholder="Precio del Producto">
                <input type="number" id="entrada" class="swal2-input" placeholder="Entrada">
                <input type="number" id="stock" class="swal2-input" placeholder="Stock">
                <input type="date" id="fecha_ingreso" class="swal2-input">
            </form>
        `,
      confirmButtonText: 'Guardar',
      focusConfirm: false,
      preConfirm: () => {
        const codigoProducto = document.getElementById('codigo_producto').value;
        const descripcionProducto = document.getElementById('descripcion_producto').value;
        const precioProducto = document.getElementById('precio_producto').value;
        const entrada = document.getElementById('entrada').value;
        const stock = document.getElementById('stock').value;
        const fechaIngreso = document.getElementById('fecha_ingreso').value;

        if (!codigoProducto || !descripcionProducto || !precioProducto || !entrada || !stock || !fechaIngreso) {
          Swal.showValidationMessage('Por favor, llena todos los campos');
          return false;
        }

        // Retorna un objeto con los valores del formulario
        return {
          codigoProducto: codigoProducto,
          descripcionProducto: descripcionProducto,
          precioProducto: precioProducto,
          entrada: entrada,
          stock: stock,
          fechaIngreso: fechaIngreso
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value);
        Swal.fire('Producto Agregado', 'El producto ha sido agregado con éxito', 'success');
      }
    });
  };
}

addProducts();