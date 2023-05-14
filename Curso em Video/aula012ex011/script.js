function verificar(){
    var agora = new Date()
    var txtidade = document.getElementById('ano')
    var ano = agora.getFullYear()
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    
    

    if(txtidade.value == 0 || txtidade.value > ano){
        window.alert('[ERRO] Verifique os dados informados')
    }else{
        var fsex = document.getElementsByName('rdsex')
        var idade = ano - Number(txtidade.value)
        
        if(idade <= 10 && fsex[0].checked){
            res.innerHTML = `Você tem ${idade} anos de idade`
            img.innerHTML = `<img src="imagens/bbh.png" alt="imagem de criança">`
        }else if(idade <= 10 && fsex[1].checked){
            res.innerHTML = `Você tem ${idade} anos de idade`
            img.innerHTML = `<img src="imagens/bbm.png" alt="imagem de criança">`
        }else if(idade > 10 && fsex[0].checked){
            res.innerHTML = `Você tem ${idade} anos de idade`
            img.innerHTML = `<img src="imagens/cara.png" alt="imagem de criança">`
        }else{
            res.innerHTML = `Você tem ${idade} anos de idade`
            img.innerHTML = `<img src="imagens/mulher.png" alt="imagem de criança">`
        }
        
    }
}

