function foo() {
    var a = 100
    console.log(a)
    this.b = 200
}
//Object
//2. constructor function syntax:
function person(name, id, salary) {
    //value properties
    this.name = name
    this.id = id
    this.salary = salary
}
//functional property
person.prototype.print = function () {
    return this.name + ' ' + this.salary
}

//{p:}
var anilObj = new person('anil', 1, 1000)
console.log(anilObj.name)
console.log(anilObj['salary'])
console.log(anilObj.print())

anilObj.location = 'Bangalore'
anilObj.sayHi = function () {
    console.log('Hi...' + this.name)
}

anilObj.sayHi()

// var sunilObj = {}
// console.log(sunilObj)

//console.log(person.prototype)