var int
console.log(int)
int = 12
console.log(int)

var float
float = 12.34

var str
str = 'Joydip'

//fn()
var fn
fn = function () {
    var a
    a = 1000
    console.log('anonymous function-function expression')
}
fn()

another()
function another() {
    console.log('function declaration')
}
another()
var isTrue
isTrue = true

console.log(typeof int)
console.log(typeof float)
console.log(typeof str)
console.log(typeof fn)
console.log(typeof another)
console.log(typeof isTrue)