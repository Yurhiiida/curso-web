function triangulo(a, b, c) {
    if (a == b && a == c) {
        console.log('Triangulo equilátero')
    } else if (a == b || a == c) {
        console.log('Triangulo isósceles')
    } else {
        console.log('Triangulo escaleno')
    }
}

triangulo(5, 5, 5)
triangulo(5, 5, 10)
triangulo(5, 10, 15)