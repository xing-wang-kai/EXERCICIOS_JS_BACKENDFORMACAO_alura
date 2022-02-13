const cliente = {
    nome: "André",
    idade: 36, 
    CPF: "12345678",
    email: "andre.andre@andremail.com",
    telefone: ['(11) 9999-9999', "(12) 8888-8888", "(11) 6666-6666"],
}
cliente.dependentes = [{
    nome: "julia da Silava sauro",
    idade: 21,
    cpf: "222.222.222-22",
    email: "julia.julia@exampledep.com",
    telefone: "(11) 0000-0000"
}]


cliente.dependentes.push({
    nome: " Ana Maria de Souza",
    idade:  22,
    email:  "anamaria@exampleorg.com",
    telefone: "(11) 5555-5555"
}
)
console.log(cliente)

const depenteporfone = cliente.dependentes.filter( item => item.telefone === "(11) 5555-5555")
console.log(depenteporfone[0].nome)

