const code = document.querySelectorAll('code')
const ex = document.querySelectorAll('p.ex')
const body = document.querySelector('body')



function modoEscuro(){
    body.style.background = 'black'
    body.style.color = 'white'
    
}
function modoClaro(){
    body.style.background = 'white'
    body.style.color = 'black'
    
    
}

const btnMenu = document.querySelector('h1Menu')
const select = document.querySelector('.select')
const opc = document.querySelector('.allOpc')
let contador = 0
function abre(){
    
    if(contador === 0){
        
        select.classList.remove('fechaMenu')
        opc.classList.remove('someOpc')
        select.classList.add('abreMenu')
        opc.classList.add('apareceOpc')

    
        contador++
        console.log(contador)
    }else{
        select.classList.remove('abreMenu')
        opc.classList.remove('apareceOpc')
        select.classList.add('fechaMenu')
        opc.classList.add('someOpc')
        
        contador--

        console.log(contador)
    }
}

let errosDiv = document.querySelector('.erro')
let numerosDiv = document.querySelector('.numeros')
let stringDiv = document.querySelector('.string')
let operadoresDiv = document.querySelector('.operadores')
let domDiv = document.querySelector('.dom')
let condicoesDiv = document.querySelector('.condicoes')
let repeticoesDiv = document.querySelector('.repeticoes')
let arrowDiv = document.querySelector('.arrow')
let mathDiv = document.querySelector('.math')
let arrayDiv = document.querySelector('.array')
let objetosDiv = document.querySelector('.objetos')
let jsonDiv = document.querySelector('.json')
let orientacaoObjDiv = document.querySelector('.orientacaoObj')
let debugDiv = document.querySelector('.debug')
let expregDiv = document.querySelector('.expreg')



let erroCheck = document.querySelector('#err')
let numCheck = document.querySelector('#num')
let strCheck = document.querySelector('#str')
let operCheck = document.querySelector('#oper')
let domCheck = document.querySelector('#dom')
let condCheck = document.querySelector('#cond')
let repCheck = document.querySelector('#rep')
let arrowCheck = document.querySelector('#arrow')
let mathCheck = document.querySelector('#math')
let arrCheck = document.querySelector('#arr')
let objCheck = document.querySelector('#obj')
let jsonCheck = document.querySelector('#json')
let oriObjCheck = document.querySelector('#oriObj')
let debugCheck = document.querySelector('#debug')
let rxpregCheck = document.querySelector('#rxpreg')

function clickCheck(dado){
    //1
    if(dado == err && erroCheck.checked == false){
        errosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == err && erroCheck.checked == true){
        errosDiv.style.display = 'block'
        console.log('errado')
    }
    //2
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //3
    if(dado == oper && operCheck.checked == false){
        operadoresDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == oper && operCheck.checked == true){
        operadoresDiv.style.display = 'block'
        console.log('errado')
    }

    //4
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //5
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //6
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //7
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //8
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //9
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //10
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //11
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //12
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //13
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //14
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    //15
    if(dado == num && numCheck.checked == false){
        numerosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == num && numCheck.checked == true){
        numerosDiv.style.display = 'block'
        console.log('errado')
    }

    


}
