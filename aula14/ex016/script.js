function contar(){
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var n3 = document.getElementById('in3')
    var res = document.getElementById('resposta')

    

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.innerHTML = "Impossível contar..."
    }else{
        res.innerHTML = 'Correndo... <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)

        if(p == 0){
            alert('Os passos tem que ter o valor mínimo de 1')
            p = 1
            n3.value = 1
        }
            if(i <= f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `\u{1F3C3} ${c}`
        }
        }else{
            for(let c = i; c >= f; c -=p){
            res.innerHTML += `\u{1F3C3} ${c}`
        }
        }
        res.innerHTML += `\u{1F3C1}`
    
    }

}