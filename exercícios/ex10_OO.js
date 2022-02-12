const cliente = {
    nome: "André",
    idade: 36, 
    CPF: "12345678",
    email: "andre.andre@andremail.com",
    telefone: ['(11) 9999-9999', "(12) 8888-8888", "(11) 6666-6666"],
}
cliente.dependentes = {
    nome: "Julia",
    idade: 21,
    cpf: "222.222.222-22",
    email: "julia.julia@exampledep.com",
    telefone: "(11) 0000-0000"
}

console.log(cliente)
cliente.dependentes.nome = "julia da Silava sauro";

console.log(cliente)