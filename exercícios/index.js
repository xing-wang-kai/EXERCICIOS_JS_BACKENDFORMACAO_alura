import {conta} from "./ProjetoOO_classconta.js"

class contapop extends conta{
    constructor(id, nome, cpf, saldo, saldpop){
        super(id, nome, cpf, saldo);
        this._saldpop = saldpop;
    }
    depositarContpop(valor){
        this._ssaldpop += valor;
    }
}

const conta01 = new contapop("1234-01", "antonio herique", "111.111.111-11", 5000, 100);
const conta02 = new contapop("1234-02", "analucia joauina", "222.222.222-22", 2300, 200);
const conta03 = new contapop("1234-03", "Rodrigo José", "333.333.333-33", 2000, 0);
const conta04 = new contapop("1234-05", "Jessica Lopes", "444.444.444-44", 1000, 4000);
const conta05 = new contapop("1234-01", "antonio herique", "111.111.111-11", 5000, 0);
const conta06 = new contapop("1234-02", "analucia joauina", "222.222.222-22", 2300, 200);
const conta07 = new contapop("1234-03", "Rodrigo José", "333.333.333-33", 2000, 400);
const conta08 = new contapop("1234-05", "Jessica Lopes", "444.444.444-44", 1000, 800);

const nvtabela = [conta01, conta02, conta03, conta04, conta05, conta06, conta07, conta08];
console.table(nvtabela)

console.log(conta._numeroContas)
