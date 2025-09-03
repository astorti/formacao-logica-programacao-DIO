class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "brigadeiro")
let boloPremium = new formaDeBolo("chocolate", "morango")
boloFesta.escrever()
boloPremium.escrever()