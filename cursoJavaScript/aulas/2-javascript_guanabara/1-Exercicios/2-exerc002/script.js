function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.ariaValueMax.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.style.textAline = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
    }
}