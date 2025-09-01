// AND (&&)
// Verifica se personagem avança para a próxima fase do jogo
let moedasColetadas = 101
let item = "estrela"
let avancaProximaFaseDoJogo = (moedasColetadas >= 100) && (item === "estrela")
console.log("Avança para a próxima fase do jogo? " + avancaProximaFaseDoJogo)

// OR (||)
// Personagem só pode sair se tiver se não estiver chovendo ou com guarda-chuva
let tempo = "chuva"
item = "guarda-chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda-chuva")
console.log("O personagem pode sair? " + podeSair)

// NOT (!)
tempo = "sol"
let horario = 8
let resultado = !((tempo === "sol") && (horario > 6))
console.log(resultado)