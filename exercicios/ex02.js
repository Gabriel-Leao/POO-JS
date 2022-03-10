const prompt = require('prompt-sync')
const input = prompt()

const humano = {
    nome: "Julia",
    Sexo: "F",
    idade: 23,
    peso: 57,
    altura: 1.66,
    comer: function() {
        let cal = input('Digite as calorias consumidas: ')
        if (cal >= 7000) {
            return ++this.peso
        } else return this.peso
    },
    treinar: function() {
        let gasto = input('Digite as calorias gastadas: ')
        if (gasto >= 7000) {
            return --this.peso
        } else return this.peso
    }
}

humano.comer()
humano.treinar()
console.log(`O peso de ${humano.nome} é de ${humano.peso}KG`)