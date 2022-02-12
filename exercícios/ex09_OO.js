// Criando arrays dentro dos valores de dados de um cliente, é possivel percorrer o array com foEach

const cliente = {
    nome: "André",
    idade: 36, 
    CPF: "12345678",
    email: "andre.andre@andremail.com",
    telefone: ['(11) 9999-9999', "(12) 8888-8888", "(11) 6666-6666"],
}
cliente.telefone.push("(11) 7777-7777");
cliente.telefone.forEach( item => console.log(item));



