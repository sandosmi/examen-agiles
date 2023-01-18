import {registrarMedico} from '../../services/registrarMedico.js'

export function validarFormulario(datosFormulario){//se da el nombre a la funcion que se quiera
    //console.log("Estamos validando...")
    //console.log(datosFormulario)

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaRegistroprof=document.getElementById("registroprof")


    //validemos tres campos del formulario que no pueden estar vacios
    //nombre-documento-registro del medico

    let nombresMedico=datosFormulario.nombre
    let documentoMedico=datosFormulario.documento
    let registroMedico=datosFormulario.registro

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombresMedico =="" && documentoMedico =="" && registroMedico==""){
       etiquetaNombre.classList.add("is-invalid")//para agregar un estilo a la caja de datos
       etiquetaDocumento.classList.add("is-invalid")
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios!',
      })
    }else if(nombresMedico=="" && documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaDocumento.classList.remove("is-invalid")//para quitar la clase de invalido
    }else if(nombresMedico !="" && documentoMedico==""){
        etiquetaNombre.classList.remove("is-invalid")//para agregar un estilo a la caja de datos
       etiquetaDocumento.classList.add("is-invalid")
    }else{
        registrarMedico(datosFormulario)
        etiquetaNombre.classList.remove("is-invalid")//para agregar un estilo a la caja de datos
        etiquetaDocumento.classList.remove("is-invalid")
    }

}