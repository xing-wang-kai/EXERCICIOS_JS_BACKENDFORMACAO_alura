class conta {
    constructor(id, nome, saldo){
        this.id = id
        this.nome = nome
        this.saldo = saldo

    }
}

class contapop extends conta{
    constructor(id, nome, saldo, saldpop){
        super(id, nome, saldo)
        this.saldpop = saldpop
    }
}

const client01 = new conta("1234-1", "emanuel", 3000)
const client02 = new conta("1234-2", "Joseane" , 2000)
const client03 = new conta("1234-5", "Jessica", 1300)
const client04 = new contapop("1234-4", "Pedro", 3000, 200)
const client05 = new contapop("1234-6", "Ezequiel", 2400, 3000)
const client06 = new contapop("1234-7", "Cristina", 5000, 100)

const clientes = [client01, client02, client03, client04, client05, client06]
console.table(clientes)
console.log(client06)
console.log(client06.saldpop)