let stringPontuacao = "50, 30, 60, 70, 20, 5, 67,2, 20, 10, 90, 60"

function compararValores(stringPontuacao) {
    let pontuacao = stringPontuacao.split(', ')
    let quebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for(let i = 1; i < pontuacao.length; i++) {
        if(pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            quebraDeRecords++
        }else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i+1
        }
    }
    return [quebraDeRecords, piorJogo]
}

console.log(compararValores(stringPontuacao))