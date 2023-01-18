export async function registrarMedico(medico){
    

    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    let peticion={
    method: "POST",//Cuando se llevan datos, se debe hacer en algo que se llama body
    headers:{"Content-Type":"application/json"},//para poner la cabecera
    body:JSON.stringify(medico)//Estamos tranformando en string para enviar los datos
    }

    let respuesta=await fetch(url, peticion)
    let respuestaOK=await respuesta.json()

    console.log(respuestaOK)
   


}