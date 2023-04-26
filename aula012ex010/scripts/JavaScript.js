var agora = new Date()
        var hr = agora.getHours()
        var txtHoras = document.getElementById('horas')
        var img1 = document.getElementById('ama')
        var img2 = document.getElementById('ent')
        var img3 = document.getElementById('noit')
        var saudacao = document.getElementById('saud')

        if(hr < 12 && hr >= 5){
            txtHoras.innerHTML = `Agora são ${hr} Horas.`
            img1.style.display = 'inline-block'
            saudacao.innerHTML = 'Bom dia! Seja bem vindo!'
            document.body.style.background = 'lightgreen'
        }else{
            if(hr >= 12 && hr <= 18){
                txtHoras.innerHTML = `Agora são ${hr} Horas.`
                img2.style.display = 'inline-block'
                saudacao.innerHTML = 'Boa tarde! Seja bem vindo!'
                document.body.style.background = '#ff895a'
            }else{
                if(hr < 5 || hr > 18){
                    txtHoras.innerHTML = `Agora são ${hr} Horas.`
                    img3.style.display = 'inline-block'
                    saudacao.innerHTML = 'Boa noite! Seja bem vindo!'
                    document.body.style.background = 'darkblue'
                }
            }
        }