/**Criando uma class para o OBJS */

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

// inciando un novo objeto.

const cliente01 = new cliente("1234-1", "joão", 23, "222.222.222-22", 3000)
const cliente02 = new cliente("1234-2", "Ana Mária", 22, "111.111.111-11", 2000)
const tabalecli = [cliente01, cliente02]

console.table(tabalecli)

cliente01.sacar(300)
cliente01.depositar(400)
cliente01.transferir(820, cliente02)

cliente01.imprimirRecibo();
cliente02.imprimirRecibo();

console.table(tabalecli)