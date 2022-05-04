function criarProduto(nome, preco) {
    return {
        nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('Sabão', 10))