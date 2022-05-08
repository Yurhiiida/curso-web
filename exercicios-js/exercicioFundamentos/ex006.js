function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao) { 
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
    
}

function jurosComposto (capitalInicial, taxaJuros, tempoAplicacao) {
    return (capitalInicial * (1 + taxaJuros) ** tempoAplicacao).toFixed(2)
}

console.log(jurosSimples(10000, 1/100, 12));
console.log(jurosComposto(10000, 1/100, 12));
