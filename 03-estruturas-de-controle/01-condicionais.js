let temOvo = false
let refeicao = "almoço"
let itensComprados = []

if(temOvo) {
    itensComprados.push("Leite")
} else if (refeicao === "jantar") {
    itensComprados.push("Ovo")
    itensComprados.push("Leite")
} else {
    itensComprados.push("Ovo")
    itensComprados.push("Pão")
}

console.log("Itens comprados: " + itensComprados)