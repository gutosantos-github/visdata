/*Diferente da variavel var que e global, a variavel let só vai existir dentro desta function*/
function contar(){
    //os nomes sao os id
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('passo')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('Erro! Faltam dados.')
    }else{
        alert('Tudo ok!')
    }

    
}