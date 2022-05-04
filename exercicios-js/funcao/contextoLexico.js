const valor = 'Global'

function minhafuncao() {
    console.log(valor)
}


function exec() {
    const valor = 'Local'
    minhafuncao()
    console.log(valor)
}

exec()