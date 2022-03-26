// Importação do modulo no nodejs (commonjs)
/* const Endereco = require("./Endereco")
const Fabricante = require("./Fabricante")
const Radio = require("./Radio") */

// Importação do módulo no navegador (ES Modules)
// Para usar crie um arquivo package.json, para isso use o comando npm init
import { Endereco } from "./Endereco.js";
import { Fabricante } from "./Fabricante.js";
import { Radio } from "./Radio.js";
import { Eletronico } from "./Eletronico.js";

const gradiente = new Fabricante("Gradiente", 1980, "Brasil", {})
const radio = new Radio("89", gradiente, 20, false)


try {
    console.log(radio)
    console.log(radio.ligarDesligar())
    console.log(radio.aumentarVolume())
    console.log(radio.diminuirVolume())
    console.log(radio.mudarEmissora("99.3"))
    console.log(radio.info())
} catch (error) {
    console.log(error)
}


/* const enderecoSamsung = new Endereco("R Tokio", 123, 18030200, "Okinawa", "Tokio", "TK");
const enderecosony = new Endereco("R States", 4321, 18040160, "Orlando", "Florida", "US")

const fabricanteSamsung = new Fabricante("Samsung", 1969, "Coreia do sul", enderecoSamsung)
const fabricantesony = new Fabricante("sony", 1947, "Coreia do sul", enderecosony)

const samsung = new Radio(fabricanteSamsung, "89", 25, false)
const sony = new Radio(fabricantesony, "99.3", 15, true)

console.log(samsung)
console.log(sony)

try {
    samsung.mudarEstacao("88.1")
} catch (error) {
    console.log(error)
}

console.log("Se não usar o try-catch o script é interrompido, e essa mensagem não apareceria.") */