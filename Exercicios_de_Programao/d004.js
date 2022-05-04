// function nomeDoMes(numeroDoMes) {
//     switch (numeroDoMes) {
//         case 1:
//             console.log('Janeiro')
//             break
//         case 2:
//             console.log('Fevereiro')
//             break
//         case 3:
//             console.log('Março')
//             break
//         case 4:
//             console.log('Abril')
//             break
//         case 5:
//             console.log('Maio')
//             break
//         case 6:
//             console.log('Junho')
//             break
//         case 7:
//             console.log('Julho')
//             break
//         case 8:
//             console.log('Agosto')
//             break
//         case 9:
//             console.log('Setembro')
//             break
//         case 10:
//             console.log('Outubro')
//             break
//         case 11:
//             console.log('Novembro')
//             break
//         case 12:
//             console.log('Dezembro')
//             break
//         default:
//             console.log('Número invalido')
//     }
// }

// nomeDoMes(0)
// nomeDoMes(1)
// nomeDoMes(2)
// nomeDoMes(3)
// nomeDoMes(4)
// nomeDoMes(5)
// nomeDoMes(6)
// nomeDoMes(7)
// nomeDoMes(8)
// nomeDoMes(9)
// nomeDoMes(10)
// nomeDoMes(11)
// nomeDoMes(12)
// nomeDoMes(13)

const numeroDoMes = ['Janeiro', 'Fevereito', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const nomeDoMes = (numero) => {
    console.log(numeroDoMes[numero])
}
nomeDoMes(0)
nomeDoMes(3)