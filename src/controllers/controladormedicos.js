//IMPORTAR los datos desde formulario
import {capturarDatos} from '../formularios/formularioMedicos.js'



//etiquetas que control:
let etiquetaNombre=document.getElementById("nombres")//id nombre
let etiquetaBoton=document.getElementById("botonenvio")//id boton
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaRegistroprof=document.getElementById("registroprof")
let etiquetaemail=document.getElementById("email")
let etiquetaImagen=document.getElementById("imagen")
let etiquetaDescripcion=document.getElementById("descripcion")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){//evento: variable para la funcion
   
    evento.preventDefault()//por defecto
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaSede,etiquetaHorario,etiquetaRegistroprof,etiquetaemail,etiquetaImagen,etiquetaDescripcion)//funcion de formulario Medicos
 
})
