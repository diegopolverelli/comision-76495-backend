const http=require("http")
const url=require("url")

const app=http.createServer((req, res)=>{

    // console.log(req) 
    // console.log(req.url) 

    const parseUrl=url.parse(req.url, true)
    console.log(parseUrl)

    if(parseUrl.pathname=="/productos"){
        res.end(`Productos...!!! ${parseUrl.query.color?parseUrl.query.color:""}`)
        return 
    }

    if(parseUrl.pathname=="/contacto"){
        res.end("Contact Page...!!!")
        return 
    }



    res.end("Bienvenidos al server...!!!")
})

app.listen(3000, ()=>{
    console.log(`Server online...!!!`)
})