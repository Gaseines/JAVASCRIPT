const cachorro = {
    raca: 'SRD',
    latir: function(){
        console.log("Au Au")
    },
    uivar: function(){
        console.log("auuuuu")
    },

    setRaca: function(raca){
        this.raca = raca
    },

    getRaca: function(){
        return "A raça do cachorro é " + this.raca
    }


}


cachorro.latir()
cachorro.uivar()

console.log(cachorro.raca)

cachorro.setRaca("Pastor Alemão")

console.log(cachorro.raca)

console.log(cachorro.getRaca())