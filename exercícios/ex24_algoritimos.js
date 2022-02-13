const livros = require('./ex22_algoritimos');

for (let atual = 0; atual < livros.length; atual ++){
    let analise = atual;
    console.log("funciona")
    while ( analise > 0 && livros[analise].preco < livros[analise-1].preco){
        
        let itemAnalise = livros[analise];
        let itemAnterior = livros[analise - 1];

        livros[analise] = itemAnterior;
        livros[analise-1]  = itemAnalise;
        analise --
    }
}

console.log(livros)