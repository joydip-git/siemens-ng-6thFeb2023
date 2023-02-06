//1. object literal syntax:
var anilObj = {
    //value properties
    name: 'Anil',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return this.name + ' ' + this.salary
    }
}

console.log(anilObj.name)
console.log(anilObj['salary'])
console.log(anilObj.print())

anilObj.location = 'Bangalore'
anilObj.sayHi = function () {
    console.log('Hi...' + this.name)
}

anilObj.sayHi()

var sunilObj = {}
console.log(sunilObj)