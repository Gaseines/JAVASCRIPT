function verificaTipo(dado){
    if(typeof dado === "string"){
        console.log("Esse dado é uma String")
    }else if(typeof dado === "number"){
        console.log("Esse dado é um Number")
    } else if(typeof dado === "boolean"){
        console.log("Esse dado é um Booleano")
    }
}

verificaTipo(155)
verificaTipo(true)
verificaTipo("Gabriel")