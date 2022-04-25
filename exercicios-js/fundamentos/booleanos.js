let isAtivo = true
isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || 'oi'))

let nome = ''
console.log(nome || 'Desconhecido')