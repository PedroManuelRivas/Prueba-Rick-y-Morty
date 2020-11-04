import Personajes from "./personajes.js"
//Creando clase hija y que importa a clase padre Personajes
class DetallesPersonajes extends Personajes {
    constructor(personajeId, name, status, species, gender, created, origin, location, episode, image) {
        super(personajeId);
        //Espacio privado
        let _name = name;
        this.getName = () => _name;
        let _status = status;
        this.getStatus = () => _status;
        //Fin de espacio privado
        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.locaction = location;
        this.episode = episode;
        this.image = image
    }
    //Creando métodos Get para Nombre y Status privados.
    get Name() {
        return this.getName()
    }
    set Name(name) {
        this._name = name;
    }
    get Status() {
        return this.getStatus();
    }
    set Status(status) {
        this._status = status;
    }

    //Creando metodos infoGeneral e infoModal
    infoGeneral() {
        return `
        <a href="#" data-toggle="modal" data-target="#exampleModal${this.getPersonajeId()}" class="col-md-3">
                        <img src="${this.image}" alt="">
                    </a>
                    <div class="col-md-1 align-self-center">
                        <span>${this.getPersonajeId()}</span> <br>
                        <span>${this.species}</span>
                    </div>
                    `
    }
    infoModal() {
        return `
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${this.getPersonajeId()}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${this.getName()}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>ID: ${this.getPersonajeId()}</p>
                        <p>Nombre: ${this.getName()}</p>
                        <p>Genero: ${this.gender}</p>
                        <p>Especies: ${this.species}</p>
                        <p>Status: ${this.getStatus()}</p>
                        <p>Creado: ${this.created}</p>
                        <p>Origen: ${this.origin.name}</p>
                        <p>Cantidad de episodios: ${this.episode.length}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>                                
        `
    }
}
export default DetallesPersonajes //Exportando la clase hija.