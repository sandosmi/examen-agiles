export function validarFormulario(datosFormulario){//se da el nombre a la funcion que se quiera
    //console.log("Estamos validando...")
    //console.log(datosFormulario)

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombre")
    let etiquetaIdentificacion=document.getElementById("identificacion")


    //validemos dos campos del formulario que no pueden estar vacios
    //nombre-identificacion del paciente

    let nombrePaciente=datosFormulario.nombre
    let identificacionPaciente=datosFormulario.identificacion
  

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombrePaciente =="" && identificacionPaciente ==""){
        etiquetaNombre.classList.add("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaIdentificacion.classList.add("is-invalid")
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre e identificacion del paciente son obligatorios!',
      })
    }else if(nombrePaciente=="" && identificacionPaciente!=""){
        etiquetaNombre.classList.add("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaIdentificacion.classList.remove("is-invalid")//para quitar la clase de invalido
    }else if(nombrePaciente !="" && identificacionPaciente==""){
        etiquetaNombre.classList.remove("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaIdentificacion.classList.add("is-invalid")
    }else{
        etiquetaNombre.classList.remove("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaIdentificacion.classList.remove("is-invalid")
    }

}