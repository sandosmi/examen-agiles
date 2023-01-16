import{consultarMedicos} from '../../services/consultaMedicos.js'

console.log("Es mi última clase")

let fila=document.getElementById("fila")// traer la etiqueta fila desde gestionmedicos

consultarMedicos().then(function(respuesta){
    respuesta.datos.forEach(function(medico){//forEach Para recorrer el arreglo
        console.log(medico)

        let columna=document.createElement("div")//crear la etiqueta para el arreglo
        columna.classList.add("col")//agregando la clase col
        
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")

        let foto=document.createElement("img")
        foto.src=medico.fotografia
        foto.classList.add("img-fluid","w-100")

        let nombres=document.createElement("h3")
        nombres.classList.add("text-center")
        nombres.textContent=medico.nombres

        //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombres)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })

})