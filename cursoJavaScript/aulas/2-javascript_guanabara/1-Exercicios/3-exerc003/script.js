/*Diferente da variavel var que e global, a variavel let só vai existir dentro desta function*/
function contar(){
    //os nomes sao os id
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        alert('Erro! Faltam dados.')
    }else{
        res.innerHTML = 'Contando..'
    }
}