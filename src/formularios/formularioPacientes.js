//importamos las validaciones del formulario
import {validarFormulario} from './validacionFormularioPaciente.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaIdentificacion,etiquetaTelefono,etiquetaCorreo,etiquetaGrupo,etiquetaCuota,etiquetaRegimen){//para enviar los datos: export
    
    let nombrePaciente=etiquetaNombre.value
    let identificacionPaciente=etiquetaIdentificacion.value
    let telefonoPaciente=etiquetaTelefono.value
    let correoPaciente=etiquetaCorreo.value
    let grupoPaciente=etiquetaGrupo.value
    let cuotaPaciente=etiquetaCuota.value
    let regimenPaciente=etiquetaRegimen.value


    //debemos almacenar todos los valores del formulario en una sola VARIABLE, para esto creamos
    //un OBJETO: Almacenar varios datos en un solo espacio de memoria

    let datosFormularioPacientes={
        nombre:nombrePaciente,
        identificacion:identificacionPaciente,
        telefono:telefonoPaciente,
        correo:correoPaciente,
        grupo:grupoPaciente,
        cuota:cuotaPaciente,
        regimen:regimenPaciente,
  
    }

    validarFormulario(datosFormularioPacientes)
  
}
