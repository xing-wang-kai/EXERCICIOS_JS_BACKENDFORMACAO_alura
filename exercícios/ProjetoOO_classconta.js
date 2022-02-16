export class conta{

    static _numeroContas = 0;
    constructor(id, nome,cpf,saldo){
        this._id = id;
        this._cpf = cpf;
        this._nome = nome;
        this._saldo = saldo;
        this._limite = 5000;
        this._recibo =[];
        conta._numeroContas += 1;
        
        if(this.construct == conta){
            console.log("você não pode criar uma conta somente com CONTA")
        }
    }

    get id(){
        return this._id;
    }

    get cpf(){
        return this._cpf;
    }

    get nome(){
        return this._nome;
    }

    get saldo(){
        return this._saldo;
    }

    get limite(){
        return this._limite;
    }

    set id(id){
        this._id = id;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    set nome(nome){
        this._nome = nome;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    set limite(limite){
        this._limite = limite
    }
    
    Sacar(valor){
        if(this._saldo < valor){
            console.log("não é possivel sacar saldo insuficidente")
        }else{
            this.saldo(this.saldo() += valor);
            this._recibo.push(`
            --> você sacou ${valor}`);
            this._recibo.push(`--> seu saldo é de ${this._saldo}`);
        }
    }
    depositar(valor){
        if(valor < 0){
            console.log("não é possivel depositar valores negativos")
        }else{
            this._saldo += valor;
        }
        

    }
    transferir(valor, conta){
        this.Sacar(valor);
        conta.depositar(valor);
        this._recibo.push(`
                            ---> Você depositou na conta ${conta._id} em nome de ${conta._nome}`);
        conta._recibo.push(`
        
                            ---> você recebeu um depósito no valor de ${valor} da conta ${this._id} em nome ${this._nome}`);


    }
    imprimirRecibo(){
        this._recibo.forEach(item => {
            console.log(item);
        })

    }
    
}