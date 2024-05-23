let {readFile, writeFile} =  require('fs')



writeFile("arquivo.txt", "Texto por WireFile", (error) =>{
    if(error){
        throw error
    }else{
        console.log("Escreveu o texto")
    }
})

readFile("arquivo.txt", "utf8", (error, texto) =>{
    if(error){
        throw error
    }else{
        console.log(texto)
    }
})