const calculadora = (function () {
    let calculadora = {}

    calculadora.soma = function (parcela1=0, parcela2=0) {
        return parcela1 + parcela2
    }

    calculadora.subtracao = function (minuendo=0, subtraendo=0) {
        return minuendo - subtraendo
    }

    calculadora.multiplicacao = function (fator1=0, fator2=0) {
        return fator1 * fator2
    }

    calculadora.dividir = function (dividendo=0, divisor=0) {
        return dividendo / divisor
    }

    return {
        somar: calculadora.soma,
        subtrair: calculadora.subtracao,
        multiplicar: calculadora.multiplicacao,
        dividir: calculadora.dividir
    }
})()

console.log(calculadora.somar(154, 77))
console.log(calculadora.multiplicar(7, 5))
console.log(calculadora.subtrair(7, 5))
console.log(calculadora.dividir(10, 5))