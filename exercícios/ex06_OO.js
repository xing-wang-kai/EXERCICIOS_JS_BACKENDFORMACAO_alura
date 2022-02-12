const cliente = {
    nome: "André",
    idade: 36, 
    CPF: "12345678",
    email: "andre.andre@andremail.com"
}

const chaves = ["nome", "idade", "CPF", "email"]

chaves.forEach ( item => {
    console.log(cliente[item])
})