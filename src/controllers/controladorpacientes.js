//IMPORTAR los datos desde formulario
import {capturarDatos} from '../formularios/formularioPacientes.js'



//etiquetas que control:
let etiquetaNombre=document.getElementById("nombre")//id nombre
let etiquetaBoton=document.getElementById("botonregistrar")//id boton
let etiquetaIdentificacion=document.getElementById("identificacion")
let etiquetaTelefono=document.getElementById("telefono")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaGrupo=document.getElementById("grupo")
let etiquetaCuota=document.getElementById("cuota")
let etiquetaRegimen=document.getElementById("regimen")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){//evento: variable para la funcion
   
    evento.preventDefault()//por defecto
    capturarDatos(etiquetaNombre,etiquetaIdentificacion,etiquetaTelefono,etiquetaCorreo,etiquetaGrupo,etiquetaCuota,etiquetaRegimen)//funcion de formulario Pacientes
 
})