function verificacao(x){
    if(x >= 18){
        console.log(`Parabéns! Você tem ${x} anos, pode entrar na auto escola`)
    }else{
        console.log("Idade menor que 18 anos, não pode fazer a auto escola")
    }
}

verificacao(25)
verificacao(15)