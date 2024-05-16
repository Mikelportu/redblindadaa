<?php
// Conexión a la base de datos (reemplaza los valores con los de tu propia configuración)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "redblindada";

// Establecer conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['name']; // Cambiado a 'name'
$email = $_POST['email']; // Cambiado a 'email'
$asunto = $_POST['subject']; // Cambiado a 'subject'
$mensaje = $_POST['message']; // Cambiado a 'message'

// Preparar la consulta SQL
$sql = "INSERT INTO Contacto (nombre, email, asunto, mensaje) VALUES ('$nombre', '$email', '$asunto', '$mensaje')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    // Mensaje de éxito utilizando SweetAlert
    echo "<script>
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado correctamente!',
                showConfirmButton: true,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'index.html'; // Redireccionar al index.html
                }
            });
        </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
