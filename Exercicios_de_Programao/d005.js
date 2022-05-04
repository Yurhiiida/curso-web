const numeroMaior = (a, b) => {
    if (a >= b && typeof a == typeof b) {
        return true
    } else {
        return false
    }
    
}

console.log(numeroMaior(0, 0))
console.log(numeroMaior(0, '0'))
console.log(numeroMaior(5, 1))
console.log(numeroMaior(1, 5))