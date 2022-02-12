const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   //usando atributo delete para apagar um valor dentro do objeto.

   delete objPersonagem.aliado

   console.log(objPersonagem) 