export async function consultarMedicos(){//función asincrona
    //consumiendo API
    //1. conocer la dirección del API
    // API o servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    //2. configurar a que voy al API
    //CONFIGURANDO LA REQUEST O PETICION
    let peticion={// crear un objeto
        method:"GET",
        //headers:{// cabeceras

        }

    //3. CONSUMIR
    // Traer los datos del API

    let respuesta=await fetch(url, peticion)//fetch:recuperar, tiene como próposito ir a la API y tomar datos
    let medicos=await respuesta.json()//se transforman los datos que llegan en json para que la información llegue de forma ordenada

    return(medicos)

}
