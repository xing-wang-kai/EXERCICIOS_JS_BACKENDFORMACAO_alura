const cliente = {
    nome: "André",
    idade: 36, 
    CPF: "12345678",
    email: "andre.andre@andremail.com",
    telefone: ['(11) 9999-9999', "(12) 8888-8888", "(11) 6666-6666"],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (this.saldo < valor){
            console.log("[ERRO] Saldo insuficiente!");
        } else {
            this.saldo -= valor;
        }
    },
    dependentes: {
        nome: "julia da Silava sauro",
        idade: 21,
        cpf: "222.222.222-22",
        email: "julia.julia@exampledep.com",
        telefone: "(11) 0000-0000"
    }, 
    

}

function verificar(obj, infor){
    var chaves = Object.keys(obj);
    if (chaves.includes(infor)){
        console.log(`Olá ${obj.nome} temos uma oferta especial para você`)
    }else{
        console.log(`Olá ${obj.nome} volte sempre!`)
    }
}

verificar(cliente, "dependentes")