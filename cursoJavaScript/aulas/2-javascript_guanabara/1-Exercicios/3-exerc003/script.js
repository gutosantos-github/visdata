/*Diferente da variavel var que e global, a variavel let só vai existir dentro desta function*/
function contar(){
    //os nomes sao os id
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value == 0 || fim.value == 0 || passo.value == 0){
        alert('Erro! Faltam dados.')
    }else{
        res.innerHTML = 'Contando..'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f ; c += p){
            res.innerHTML += `${c} \u{1F603}`
        }
    }
}