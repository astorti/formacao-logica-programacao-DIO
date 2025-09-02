let resultado = somar(5, 10)
console.log(`O resultado dessa função é ${resultado}`)

function somar(numeroA, numeroB) {
    let soma = numeroA + numeroB
    return soma
}

console.log("-------------------")

let userName = getFirstName("Arthur Conan Doyle")

console.log("Welcome " + userName)

function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}