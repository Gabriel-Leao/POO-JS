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

    calculadora.potencia = function (base=0, expoente=0) {
        return Math.pow(base, expoente)
    }

    calculadora.porcentagem = function (n1=0, n2=0) {
        return  n2 * (n1 / 100)
    }

    return {
        somar: calculadora.soma,
        subtrair: calculadora.subtracao,
        multiplicar: calculadora.multiplicacao,
        dividir: calculadora.dividir,
        potencia: calculadora.potencia,
        porcentagem: calculadora.porcentagem
    }
})()