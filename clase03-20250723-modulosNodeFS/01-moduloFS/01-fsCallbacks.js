const fs=require("fs")

let rutaArchivo="./archivos/archivoCallbacks.txt"
let texto2=`El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`


// Utilizando fs con métodos asincronos / callbacks:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantalla
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo

fs.writeFile(rutaArchivo, texto2, {}, error=>{
    if(error){
        console.log(`Falló al grabar archivo...!!!`)
        return 
    }

    console.log(`Archivo generado!`)

    fs.readFile(rutaArchivo, "utf-8", (error, datoLeido)=>{
        if(error){
            console.log(`Falló al leer archivo...!!!`)
            return 
        }
    
        console.log(datoLeido)

        fs.appendFile(rutaArchivo, "\n\nEditorial Santillana", error=>{
            if(error){
                console.log(`Falló al agregar editorial al archivo...!!!`)
                return 
            }
        
            console.log("Editorial agregado!")    
            
            fs.unlink(rutaArchivo, error=>{
                if(error){
                    console.log(`Falló al eliminar archivo...!!!`)
                    return 
                }

                console.log(`Archivo eliminado...!!!`)
            })
        })
    })
})

