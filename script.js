function validacionNombre()
{
    const nombre = document.getElementById("Nombre").value
    if(nombre.length > 3)
    {

    }
}

function validacionEmail()
{
    const Mail = document.getElementById("Email").value
    if(String.Mail.includes("@gmail.com"))
    {
        
    }
}

function validacionContraseña()
{
    const contraseña = document.getElementById("pass").value
    if(contraseña.length < 8)
    {
        alert("La contraseña debe contener al menos 8 caracteres")
    }    
    
}

function validacionContraseñas()
{
    const contra1 = document.getElementById("pass").value
    const contra2 = document.getElementById("pass2").value
    if(contra1 == contra2)
    {

    }    
    
}

function validacionForm()
{
    if (campo1, campo2 , campo3)
    {
        alert("Datos enviados con éxito!");
    }
}