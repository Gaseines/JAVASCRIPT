
var bau = []
var texto = document.getElementById('txt')

function inlist(n, b){
    if (b.indexOf(Number(n)) != -1){
        return false
    }else{
        return true
    }
}

function add(){
    let num = document.getElementById('inum')
    let list = document.getElementById('ires')
    let numr = Number(num.value)
    
     if(numr > 100 || numr < 1 || !inlist(num.value, bau)){
        alert(`Valor inválido ou ja encontrado na lista!`)
    }else{
        texto.innerHTML = ''
        let item = document.createElement('option')
        
        item.text = `Valor ${numr} foi adicionado!`
        list.appendChild(item)
        bau.push(numr)  
        
    }
    
    
}
function fim(){
    let list = document.getElementById('ires')
    bau.sort(function(a, b){
        return a - b
    })

    

    if(list.childElementCount == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tamanho = bau.length
        let ult = bau[tamanho - 1]
        let prim = bau[0]

        for(let c = 1; c <= tamanho - 1; c++){
            var soma = bau[0] += bau[c]
        }

        var media = soma / tamanho

        texto.innerHTML += `<p>Ao todo, foram ${tamanho} números cadastrados</p>
        <p>O maior valor informado foi ${ult}</p>
        <p>O menor valor informado foi ${prim}</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digitados é ${media}</p>`
    
    }


}