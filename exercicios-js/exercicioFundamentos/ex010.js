function verificarDivisao(numero) {
    let numerodividido = numero % 3
    if (numerodividido == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificarDivisao(9))
console.log(verificarDivisao(10))