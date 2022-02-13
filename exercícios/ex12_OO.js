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
    }
}

console.log(cliente.saldo)
cliente.depositar(300);
console.log(cliente.saldo);
cliente.sacar(50);
console.log(cliente.saldo);
cliente.sacar(20000);
console.log(cliente.saldo);
