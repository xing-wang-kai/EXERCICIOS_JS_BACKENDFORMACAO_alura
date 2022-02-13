//objeto para JSON E JSON PARA OBJS

/* var novo_json = {
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "Diego Martins de Pinho",
    "categoria": "programação"
  }

  var novo_objeto = JSON.parse(novo_json);

  var retorna_json = JSON.stringify(novo_objeto);

  console.log(novo_objeto)
  console.log(retorna_json)*/

  const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)