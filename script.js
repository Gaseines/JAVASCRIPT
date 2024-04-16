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
let assincornaDiv = document.querySelector('.ass')



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
let rxpregCheck = document.querySelector('#expreg')
let assCheck = document.querySelector('#ass')

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
    if(dado == str && strCheck.checked == false){
        stringDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == str && strCheck.checked == true){
        stringDiv.style.display = 'block'
        console.log('errado')
    }

    //4
    if(dado == oper && operCheck.checked == false){
        operadoresDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == oper && operCheck.checked == true){
        operadoresDiv.style.display = 'block'
        console.log('errado')
    }

    //5
    if(dado == dom && domCheck.checked == false){
        domDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == dom && domCheck.checked == true){
        domDiv.style.display = 'block'
        console.log('errado')
    }

    //6
    if(dado == cond && condCheck.checked == false){
        condicoesDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == cond && condCheck.checked == true){
        condicoesDiv.style.display = 'block'
        console.log('errado')
    }

    //7
    if(dado == rep && repCheck.checked == false){
        repeticoesDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == rep && repCheck.checked == true){
        repeticoesDiv.style.display = 'block'
        console.log('errado')
    }

    //8
    if(dado == arrow && arrowCheck.checked == false){
        arrowDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == arrow && arrowCheck.checked == true){
        arrowDiv.style.display = 'block'
        console.log('errado')
    }

    //9
    if(dado == math && mathCheck.checked == false){
        mathDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == math && mathCheck.checked == true){
        mathDiv.style.display = 'block'
        console.log('errado')
    }

    //10
    if(dado == arr && arrCheck.checked == false){
        arrayDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == arr && arrCheck.checked == true){
        arrayDiv.style.display = 'block'
        console.log('errado')
    }

    //11
    if(dado == obj && objCheck.checked == false){
        objetosDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == obj && objCheck.checked == true){
        objetosDiv.style.display = 'block'
        console.log('errado')
    }

    //12
    if(dado == json && jsonCheck.checked == false){
        jsonDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == json && jsonCheck.checked == true){
        jsonDiv.style.display = 'block'
        console.log('errado')
    }

    //13
    if(dado == oriObj && oriObjCheck.checked == false){
        orientacaoObjDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == oriObj && oriObjCheck.checked == true){
        orientacaoObjDiv.style.display = 'block'
        console.log('errado')
    }

    //14
    if(dado == debug && debugCheck.checked == false){
        debugDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == debug && debugCheck.checked == true){
        debugDiv.style.display = 'block'
        console.log('errado')
    }

    //15
    if(dado == expreg && rxpregCheck.checked == false){
        expregDiv.style.display = 'none'
        console.log('certo')
    }else if(dado == expreg && rxpregCheck.checked == true){
        expregDiv.style.display = 'block'
        console.log('errado')
    }

    


}
