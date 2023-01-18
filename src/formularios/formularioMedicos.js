//importamos las validaciones del formulario
import {validarFormulario} from './validacionFormularioMedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaSede,etiquetaHorario,etiquetaRegistroprof,etiquetaemail,etiquetaImagen,etiquetaDescripcion){//para enviar los datos: export
    
    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let RegistroMedico=etiquetaRegistroprof.value
    let emailMedico=etiquetaemail.value
    let imagenMedico=etiquetaImagen.value
    let descripcionMedico=etiquetaDescripcion.value

    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)
    // console.log(sedeMedico)
    // console.log(horarioMedico)
    // console.log(RegistroMedico)
    // console.log(emailMedico)
    // console.log(imagenMedico)
    // console.log(descripcionMedico)

    //debemos almacenar todos los valores del formulario en una sola VARIABLE, para esto creamos
    //un OBJETO: Almacenar varios datos en un solo espacio de memoria

    let datosFormularioMedico={
        nombres:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        registro:RegistroMedico,
        correo:emailMedico,
        descripcion:descripcionMedico,
        fotografia:imagenMedico,
    }

    validarFormulario(datosFormularioMedico)
  
}
