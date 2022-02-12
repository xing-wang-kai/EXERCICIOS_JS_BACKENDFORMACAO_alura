//CURSO ALURA

//DESAFIO: Calcular a média entre notas usando a função ForEach
// notas = [10, 6.5, 8, 7.5]

//function callback

//teste 001
let notas = [10, 6.5, 8, 7.5]
let media = 0
notas.forEach( item => { 
    media += item/notas.length;
})

//teste 002
let testmedia = 0

notas.forEach(function(item){
    testmedia += item/notas.length;
})


//teste 003
let adicionar = []

notas.forEach( item => {
    adicionar.push(++item)
})

//teste 004

let nome = ["ana", "julia", "amelia", "ricado"]


nome.forEach(MostraNome)

function MostraNome(item){
    console.log(item);
}

//teste 001
console.log(media)
//teste 002
console.log(testmedia)
//teste 003
console.log(adicionar)
//teste 004

