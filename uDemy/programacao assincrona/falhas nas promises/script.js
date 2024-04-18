function verificarDado(dado){
    return new Promise((resolve, reject) => {

        if (dado === 'Gabriel') {
            resolve(console.log('O usuário Gabriel foi encontrado!'))
        } else {
            reject('O usuário não foi encontrado')
        }
    })
    
}

verificarDado('Gabriel')

verificarDado('Joao')

