const valores = [7, 8, 9, 3]// array
console.log(valores[0], valores[3])//mostra os valores no index informado
console.log(valores[4])//como não tem o index 4 ele vai retornar o valor undefined

valores[4] = 10 //vai adicionar valor 10 no indice 4 da array
console.log(valores)
console.log(valores.length)//length mostra a quantidade de index que tem na array

valores.push('oi', false, null)//push adiciona os elementos no final da array
console.log(valores)

console.log(valores.pop())//remove o ultimo elemento e retorna ele
delete valores[0] // deleta o elemento do indice definido
console.log(valores)

console.log(typeof valores)