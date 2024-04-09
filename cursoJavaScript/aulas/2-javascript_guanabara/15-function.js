let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
//console.log(amigo)
amigo.engordar(10)
console.log(`${amigo.nome} engordou ${amigo.peso}`)