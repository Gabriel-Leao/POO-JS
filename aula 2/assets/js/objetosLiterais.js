console.log("=== OBJETOS LITERAIS ===")

const pessoa = {
    nome: "Gabriel",
    altura: 1.75,
    peso: 80,
    idade: 18,
    profision: "programador",
    comer: function () {
        return "nham nham!"
    },
    andar: function () {
        return "shlep shlep"
    },
    falar: function () {
        return "bla bla bla"
    },
    dormir: function () {
        return "zzzzzz"
    },
}
//printando o objeto
console.log(pessoa) 
 //printando a propriedade do obejeto
console.log(pessoa.profision)
// printando o método do objeto
console.log(pessoa.comer(), pessoa.dormir())