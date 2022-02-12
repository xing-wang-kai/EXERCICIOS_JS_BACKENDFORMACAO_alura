var notas = [ 2, 4, 6, 10];

var media = notas.reduce( (acomu, valores) => valores + acomu, 0)

console.log(media/notas.length);