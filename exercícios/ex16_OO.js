    const cliente = [{
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
        dependentes: [{
            nome: "julia da Silava sauro",
            idade: 21,
            cpf: "222.222.222-22",
            email: "julia.julia@exampledep.com",
            telefone: "(11) 0000-0000"
        },
        {
            nome: " Ana Maria de Souza",
            idade:  22,
            email:  "anamaria@exampleorg.com",
            telefone: "(11) 5555-5555"
        }
        ]
    },

    {
        nome: "veronica",
        idade: 22, 
        CPF: "12345678",
        email: "andre.andre@andremail.com",
        telefone: ['(11) 9999-9999', "(12) 8888-8888", "(11) 6666-6666"],
        saldo: 100,
        dependentes: [{
            nome: " Carlos luiz",
            idade:  13,
            email:  "anamaria@exampleorg.com",
            telefone: "(11) 5555-5555"
        }]
    }

]
/*O method desctruction pega somente os valores dentro do array que são array e então espalha eles dentro do method
no exemplo exposto recolhemos todos dados quee esava no array principal cliente e então pegamos os dados cliente dempentes que eram arrays e jogamos em uam tabela  */ 

const novodados = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(novodados)

console.table(cliente)