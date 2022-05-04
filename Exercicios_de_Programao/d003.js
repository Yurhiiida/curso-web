const calcularSalario = (horasTrabalhadas, ganhoPorHora) => {
    return `Salário igual a R$ ${horasTrabalhadas * ganhoPorHora}.`
}

console.log(calcularSalario(150, 40.5))