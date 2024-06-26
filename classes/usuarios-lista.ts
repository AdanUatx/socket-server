import { Usuario } from "./usuario";

export class UsuariosLista {

    private lista: Usuario[] = [];


    constructor(){

    }

    // Agregar Usuarios
    public agregar( usuario: Usuario){
        this.lista.push( usuario );
        console.log( this.lista );
        return usuario;
    }

    // Actualizar nombre
    public actualizarNombre( id: string, nombre: string){

        for( let usuario of this.lista) {
            if(usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('Actualizando usuario', this.lista);
    }

    // Obtener lista de usuarios conectados
    private getUsuariosConectados(){
        return this.lista;
    }


    public getUsuario(id: string){
        return this.lista.find( usuario => usuario.id === id);
    }

    public getUsuariosEnSala( sala: string){
        return this.lista.filter( usuario => usuario.sala === sala);
    }

    // Borrar usuario
    public borrarUsuario( id: string){
        const tempUser = this.getUsuario( id );

        this.lista = this.lista.filter( usuario => usuario.id !== id);

        console.log(this.lista);
        return tempUser;
    }
}