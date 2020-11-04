//Requerimiento 1: Creación de archivo "personajes.js"
//Creación de clase padre
class Personajes {
    constructor(personajeId) {
        let _personajeId = personajeId;
        this.getPersonajeId = () => _personajeId;
    }
    get personajeId() {
        return this.getPersonajeId();
    }

    set personajeId(personajeId) {
        this._personajeId = personajeId;
    }
}

export default Personajes //Exportando la clase padre.