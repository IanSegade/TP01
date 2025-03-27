var campo1 = false;
var campo2 = false;
var campo3 = false;
var campo4 = false;

function validacionNombre() {
    const nombre = document.getElementById("Nombre").value;
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        campo1 = false;
    } else {
        errorNombre.textContent = "";
        campo1 = true;
    }

    validarFormulario();
}

function validacionEmail() {
    const Mail = document.getElementById("Email").value;
    const errorEmail = document.getElementById("errorEmail");

    if (!Mail.includes("@") || !Mail.includes(".com")) {
        errorEmail.textContent = "El email debe tener el formato @().com";
        campo2 = false;
    } else {
        errorEmail.textContent = "";
        campo2 = true;
    }

    validarFormulario();
}

function validacionContraseña() {
    const contraseña = document.getElementById("pass").value;
    const errorContraseña = document.getElementById("errorContraseña");

    var tieneNumeros = /\d/.test(contraseña);
    var tieneLetras = /[a-z]/.test(contraseña);

    if (contraseña.length < 8) {
        errorContraseña.textContent = "La contraseña debe contener al menos 8 caracteres";
        campo3 = false;
    } else if (!tieneNumeros || !tieneLetras) {
        errorContraseña.textContent = "La contraseña debe contener al menos una letra y un número";
        campo3 = false;
    } else {
        errorContraseña.textContent = "";
        campo3 = true;
    }

    validarFormulario();
}

function validacionContraseñas() {
    const contra1 = document.getElementById("pass").value;
    const contra2 = document.getElementById("pass2").value;
    const errorPass2 = document.getElementById("errorPass2");

    if (contra1 !== contra2) {
        errorPass2.textContent = "Las contraseñas no coinciden";
        campo4 = false;
    } else {
        errorPass2.textContent = "";
        campo4 = true;
    }

    validarFormulario();
}

function validarFormulario() {
    const botonEnvio = document.getElementById("enviarBtn");

    if (campo1 && campo2 && campo3 && campo4) {
        botonEnvio.disabled = false;
    } else {
        botonEnvio.disabled = true;
    }
}

function validacionForm(event) {
    const botonEnvio = document.getElementById("enviarBtn");

    if (botonEnvio.disabled) {
        event.preventDefault();  
        alert("Por favor, complete todos los campos correctamente antes de enviar.");
    } else {
        alert("Datos enviados con éxito!");
    }
}
