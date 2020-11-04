//Importando clase DetallesPersonajes
import DetallesPersonajes from "./detallesPersonajes.js"
//Creando función IIFE con 3 variables privadas 
let llamadoPersonajes = (() => {
    const baseURL = "https://rickandmortyapi.com/api/character/";
    const elementoDOM = $(".resultados").first();
    let contenedora;
    //Punto 5: Creando primera función asincrona privada )
    const consultarPersonajes = async () => {
        try {
            const direccionAPI = await fetch(baseURL)
            contenedora = await direccionAPI.json()
            return contenedora; //Objeto con propiedades de los personajes 
        }
        catch (err) {
            console.log(err)
        }
        finally {
            // setTimeout(function () {
            $("#spinner").addClass("d-none");
            $("#cantidadPersonajes").html(
                contenedora.results ? contenedora.results.length : 0);
            // }, 3000)
        }
    }
    //Punto 5: Creando segunda función asincrona privada
    const consultarPersonajesDetalle = async (id) => { //Enunciado dice que recibe ID
        try {
            const respuesta = await fetch(`${baseURL}/${id}`)
            const resolve = await respuesta.json()
            return new DetallesPersonajes(id, resolve.name, resolve.status, resolve.species, resolve.gender, resolve.created, resolve.origin, resolve.location, resolve.episode, resolve.image)
        }
        catch (err) {
            console.log(err)
            return null;
        }
    };
    return {
        mostrarPersonajes: async () => {
            const listado = await consultarPersonajes()
            const data = listado.results
            if (data) {
                data.forEach(async (elemento) => {
                    const detalle = await consultarPersonajesDetalle(elemento.id)
                    if (detalle) {
                        elementoDOM.append(
                            detalle.infoGeneral() + detalle.infoModal()
                        )
                    }
                })
            }
        },
    }
})();
llamadoPersonajes.mostrarPersonajes()