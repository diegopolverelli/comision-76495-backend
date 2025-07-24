const fs = require("fs")

class UsersManager {
    // static #usuarios=[]
    static rutaDatos = ""

    saludo() {
        console.log("hola")
    }

    static saludoStatic() {
        console.log("hola")
    }

    static async getUsers() {
        if (fs.existsSync(this.rutaDatos)) {
            return JSON.parse(await fs.promises.readFile(this.rutaDatos, "utf-8"))
        } else {
            return []
        }
    }

    static async addUser(nombre, email, password) {
        let usuarios = await this.getUsers()

        // validar si ya existe algun usuario con email = email

        let id = 1
        if (usuarios.length > 0) {
            id = Math.max(...usuarios.map(d => d.id)) + 1
        }

        let nuevoUsuario = {
            id,
            nombre,
            email,
            password
        }

        usuarios.push(nuevoUsuario)

        await fs.promises.writeFile(this.rutaDatos, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario

    }

}


// const usersManager=new UsersManager()
// usersManager.saludo()

// fetch()

// UsersManager.rutaDatos="./data/usuarios.json"
// UsersManager.addUser("Juan", "juan@test.com", "123456")

// UsersManager.getUsers()
//                 .then(usuarios=>{
//                     console.log(usuarios)
//                     if(usuarios.length>0){
//                         console.log(usuarios[0].nombre)
//                     }
//                 })

const app = async () => {
    UsersManager.rutaDatos = "./data/usuarios.json"
    await UsersManager.addUser("Carlos", "carlos@test.com", "123")
    await UsersManager.addUser("Carlos1", "carlos1@test.com", "123")
    await UsersManager.addUser("Carlos2", "carlos2@test.com", "123")

    let datos = await UsersManager.getUsers()

    console.log(datos)
}

app()