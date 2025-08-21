const socket=io()
const ulHeroes=document.getElementById("heroes")

socket.on("nuevoHeroe", (name, alias)=>{
    let li=document.createElement("li")
    li.innerHTML=`${name} - identidad: <strong>${alias}</strong>`
    ulHeroes.append(li)
})