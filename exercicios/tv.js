/* Construa uma classe para gerar um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, 
udaDeCanal e aumentaVolume, diminuiVolume.
Uma implementação publica e outra privada. */

class TV {
    constructor() {
        this.volume = {
            min: 0,
            max: 100,
            atual: 10
        }
        this.canal = 5
        this.ligada = false
    }

    ligarDesligar() {
        return this.ligada = !this.ligada
    }

    mudarCanal(numeroCanal) {
        if (numeroCanal < 2 || numeroCanal > 64) {
            console.log("Canal não existe, os números dos canais estão entre 2 e 64")
            return this.canal
        } else return this.canal = numeroCanal
    }

    aumentarVolume () {
        if (this.volume.atual == this.volume.max) {
            return this.volume.atual
        } else if (this.ligada) {
            return  this.volume.atual += 1
        } else {
            return this.volume.atual = 0
        }
    }

    diminuirVolume() {
        if (this.volume.atual == this.volume.min) {
            return  this.volume.atual
        } else if (this.ligada) {
            return  this.volume.atual -= 1
        } else {
            return this.volume.atual = 0
        }
    }
}

const casa = new TV