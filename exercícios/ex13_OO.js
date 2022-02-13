const personagen = {
    nome: "Homem-aranha",
    poder: "solta teia",
    idade: 16
}
// este caso a const novo personagem não copia personagem somente faz uma referencia a ele na memória.
const novo_personagem = personagen

//para criar um novo personagem devemos usar o primeiro com um molde com o segmento.
const novo_personagem2 = Object.create(personagen)
// no exemplo acima se direciona ao personagem e então cria um novo como o primeiro em modelo.
novo_personagem2.nome = "lincernegra",
novo_personagem2.poder = "atravessa paredes",
novo_personagem2.idade = 19,

console.log(personagen);
console.log(novo_personagem2);