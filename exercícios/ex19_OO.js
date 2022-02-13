/**Neste novo exercicio se usará o conceitos de heranças onde usando a função e o chamado ao novo cliente na class
 * depois vamos então construir um novo construção de class que vai usar a class conta cliente como construtor.
 */

function cliente(id, nome, idade, cpf, saldo){
    this.id = id
    this.nome = nome,
    this.idade = idade,
    this.cpf = cpf,
    this.saldo = saldo,
    this.limite = 5000,
    this.recibo = [],
    this.sacar = function(valor){
        if(valor > this.saldo){
            console.log("não é possivel sacar")
        }else{
            this.saldo -= valor,
            this.recibo.push(`você sacou o valor ${valor} seu saldo é ${this.saldo}`)
        }
    },
    this.depositar = function(valor){
        this.saldo += valor,
        this.recibo.push(`você depositou o valor ${valor} seu saldo é ${this.saldo}`)
    },
    this.transferir = function(valor, conta){
        this.sacar(valor)
        conta.depositar(valor)
        this.recibo.push(`você transferiu o valor ${valor} para conta ${conta.id} 
        no nome de ${conta.nome} e seu saldo é ${this.saldo}`)
        conta.recibo.push(`voce recebeu a transferência de ${valor} da conta ${this.id} no nome de ${this.nome}
        seu saldo é ${conta.saldo}`)
    }
    
    this.imprimirRecibo = function(){
        console.log("----------------------------------------------")
        console.log(`--------------OLÁ ${this.nome}-------${Date()}`)
        for (item in this.recibo){
            console.log(`
 --> ${this.recibo[item]}`
                )
        }
        console.log("----------------------------------------------")
    }


}
/**INICIANDO A NOVA CLASS QUE VAI HERDAR DADOS DA CLASS CLIENTE */

function contapop(id, nome, idade, cpf, saldo, saldopop){
    cliente.call(this, id, nome, idade, cpf, saldo)
    this.saldopop = saldopop,
    this.adddeposito = function(valor){
        this.saldo += valor
        this.recibo.push(`você depositou na poupança o valor ${valor} seu saldo é ${this.saldopop}`)

    }
}


const cliente01 = new cliente("1234-1", "joão", 23, "222.222.222-22", 3000)
const cliente02 = new cliente("1234-2", "Ana Mária", 22, "111.111.111-11", 2000)
const cliente03 = new contapop("1234-3", "Juliana maria", 25, "333.333.333-33", 3000, 0)
const cliente04 = new contapop("1234-4", "Amélia Joaquina", 39, "444.444.444-44", 4500, 500)
const cliente05 = new contapop("1234-5", "henrique matogrosso", 40, "666.666.666-66", 1000, 1000)


const tabalecli = [cliente01, cliente02, cliente03, cliente04, cliente05]

console.table(tabalecli)