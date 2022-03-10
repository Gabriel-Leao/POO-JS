const humano = {
    nome: "Julia",
    Sexo: "F",
    idade: 23,
    peso: 57,
    altura: 1.66,
    comer: function() {
        let cal = prompt('Digite as calorias consumidas: ')
        if (cal >= 7000) {
            return ++this.peso
        } else return this.peso
    },
    treinar: function() {
        let gasto = prompt('Digite as calorias gastadas: ')
        if (gasto >= 7000) {
            return --this.peso
        } else return this.peso
    }
}