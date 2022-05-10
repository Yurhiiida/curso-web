fatorial = numero => {
    for (let i = numero; i > 2; i-- ) {
        let fatorial = numero *= (i - 1)
        console.log(`${numero}! = ${fatorial}`)
    }
    
}

fatorial(10)

// function fatorial2 (numero) {
//     if(numero == 0){
//         return 1
//     } else {
//         return numero * fatorial2(numero - 1)
//     }
// }

// console.log(fatorial2(10))