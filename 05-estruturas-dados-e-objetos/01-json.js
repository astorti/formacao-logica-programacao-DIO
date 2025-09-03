let pedido = {
    nome: "John",
    idade: 28,
    produtos: {
        0: ["mouse", 29.90],
        1: ["caneta", 4.99],
        2: ["notebook", 2899.99]
    }
}

gerarPedido(pedido)

function gerarPedido(pedido) {
    console.log(`O comprador é ${pedido.nome}`)
    console.log(`A idade é ${pedido.idade}`)
    console.log("-----------------")
    console.log("Os produtos são: ")

    for(let index in pedido.produtos) {
        let [nomeProduto, precoProduto] = pedido.produtos[index]
        console.log(`- ${nomeProduto}: R$ ${precoProduto}`)
    }
}