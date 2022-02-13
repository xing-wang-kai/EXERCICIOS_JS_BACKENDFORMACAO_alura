const livros = require('./ex22_algoritimos');

function menorValor(arrayProdutos, posicaoInicial){

    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrayProdutos.length; atual ++ ){

        if(arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco){
            maisBarato = atual
    
        }
    }
    return maisBarato;
}

module.exports = menorValor;