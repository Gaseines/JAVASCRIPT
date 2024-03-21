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