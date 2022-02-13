const livros = require('./ex22_algoritimos');
const menorValor = require('./ex21_algoritimos');


for (let atual = 0; atual < livros.length; atual ++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log(`Posição atual ${atual}`)
    console.log(` livro atual ${livros[atual]}`)

    let livroMenorPreco = livros[menor];

    console.log(` livro menor preço ${livros[atual]}`)

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual


}

console.log(livros)