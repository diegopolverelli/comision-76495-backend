import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsuarios(limit=20, page=1){
        // return await usuariosModelo.find({first_name:"John"}).lean()
        return await usuariosModelo.paginate({}, {limit, page, lean: true})
    }
}