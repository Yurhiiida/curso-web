//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criar de forma literal
function func1() {
    a = 5
    b = 5
    return a + b
}

const func1 = () => {a = 5, b = 5; return a + b}
console.log(func1())
//Armazenar em uma variável
const func2 = function(a, b){
    return a * b
}

//Armazenar em um array
const array = [function (a,b) {return a + b}, func1, func2]
console.log(array[0](2, 3), array[1](10, 5), array[2](25, 2))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)