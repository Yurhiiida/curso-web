function aprovadoReprovado (notaAluno) {
    let notaCorrigida = arredondamento(notaAluno)
    if (notaCorrigida <= 47) {
        console.log(`${notaCorrigida} Reprovado!`)
    } else if (notaCorrigida >= 48 && notaCorrigida <= 84) {
        console.log(`${notaCorrigida} Recuperação!`)
    } else if (notaCorrigida >= 85 && notaCorrigida <= 100) {
        console.log(`${notaCorrigida} Aprovado!`)
    }
}

function arredondamento(notaAluno) {
    if(notaAluno >= 48 && notaAluno <= 50) {
        return notaAluno = 50
    } else if (notaAluno >= 82 && notaAluno <= 85) {
        return notaAluno = 85
    } else {
        return notaAluno
    }
}

aprovadoReprovado(25)
aprovadoReprovado(30)
aprovadoReprovado(48) //arredondar para 50
aprovadoReprovado(60)
aprovadoReprovado(84) //arredondar para 85
aprovadoReprovado(90)
aprovadoReprovado(100)