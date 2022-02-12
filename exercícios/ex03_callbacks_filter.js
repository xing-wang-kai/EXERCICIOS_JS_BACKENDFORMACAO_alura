const nome = ["Amelia", "Ricardo", "Joaquim", "Henrique"]
const notas = [8, 2, 7, 4]

const reprovados = nome.filter( (item, index) => notas[index] < 7 )

console.log(reprovados)