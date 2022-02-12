let notas = [10, 9, 8, 6, 7]

let novasnotas = notas.map( item => item >= 10? item : ++item)

console.log(novasnotas)