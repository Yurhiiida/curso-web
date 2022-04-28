const imprimirResultado = function(nota) {
    if (isNaN(nota) == true) {
        console.log('Erro!, valor não é um número')
    } else if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Olá')