//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")//id nombre
let etiquetaBoton=document.getElementById("botonenvio")//id boton
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegistroprof=document.getElementById("registroprof")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){//evento: variable para la funcion
    evento.preventDefault()//por defecto
    // Swal.fire(//sweetalert
    //     'Exitoso!',
    //     'El especialista ha sido registrado!',
    //     'success'
    //   )

    //Recibiendo los datos del formulario
    let nombresMedico=etiquetaNombre.value
    console.log(nombresMedico)

    let documentoMedico=etiquetaDocumento.value
    console.log(documentoMedico)

    let registroprofMedico=etiquetaRegistroprof.value
    console.log(registroprofMedico)

})
