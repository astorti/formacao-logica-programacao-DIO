pedido("pão de forma", 7.99, "James")
pedido("pão integral", 10.99, "John")
pedido("Pão Francês", 9.99)

function pedido(pao, valor, cliente = "Cliente") {
    console.log("=====================")
    console.log("Pedido de " + cliente)
    console.log("Torrada de " + pao)
    console.log("Valor: R$ " + valor)
    console.log("=====================")
}