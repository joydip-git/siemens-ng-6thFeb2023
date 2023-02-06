class Person {
    #_name
    #_id
    #_salary
    constructor(name, id, salary) {
        this.#_name = name
        this.#_id = id
        this.#_salary = salary
    }
    print() {
        return this.#_name + ' ' + this.#_salary
    }
    get id() {
        return this.#_id
    }
    get name() {
        return this.#_name
    }
    set name(value) {
        this.#_name = value
    }
    get salary() {
        return this.#_salary
    }
    set salary(value) {
        this.#_salary = value
    }
}
class Trainer extends Person {
    #_subject
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.#_subject = subject
    }
    get subject() {
        return this.#_subject
    }
    set subject(value) {
        this.#_subject = value
    }
    print() {
        return super.print() + ' ' + this.#_subject
    }
}
var anilObj = new Trainer('anil', 1, 1000, 'JavaScript')
console.log(anilObj.name)
console.log(anilObj.salary)
console.log(anilObj.print())


anilObj.location = 'Bangalore'
anilObj.sayHi = function () {
    console.log('Hi...' + this.name)
}

anilObj.sayHi()


console.log(Person.prototype)
console.log(anilObj)