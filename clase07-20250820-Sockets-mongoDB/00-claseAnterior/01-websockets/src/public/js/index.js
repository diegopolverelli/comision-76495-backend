console.log(`Script cargado!`)
const inputMensaje=document.getElementById("mensaje")
const divMensajes=document.getElementById("mensajes")
const btnMensaje=document.getElementById("btnMensaje")
const divHora=document.getElementById("hora")

const socket=io()
let nombre

socket.on("saludo", mensaje=>{
    nombre=prompt(mensaje)
    if(nombre){
        socket.emit("nombre", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha unido al servidor!`)
})

socket.on("nuevoMensaje", (nombre, mensaje)=>{
    divMensajes.innerHTML+=`<strong>${nombre}</strong> dice <i>${mensaje}</i><br>`
})

btnMensaje.addEventListener("click", e=>{
    e.preventDefault()

    if(inputMensaje.value.trim().length>0){
        socket.emit("mensaje", nombre, inputMensaje.value.trim())
        inputMensaje.value=""
        inputMensaje.focus()
    }
})

socket.on("nuevoHeroe", name=>{
    alert(`Se creo el nuevo heroe ${name}`)
})

socket.on("hora", hora=>{
    divHora.textContent=hora
})

socket.on("oferta", mensaje=>{
    alert(mensaje)
})