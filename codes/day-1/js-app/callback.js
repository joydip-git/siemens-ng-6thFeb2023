// const filterValues = function (arr, logicFnRef) {
//     const result = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (logicFnRef(element)) {
//             result.push(element)
//         }
//     }
//     return result
// }
const numbers = [4, 1, 3, 2]
const isEven = function (num) {
    return num % 2 === 0 ? true : false
}
//const resultant = filterValues(numbers, isEven)
const resultant = numbers.filter(isEven)
console.log(resultant)

const people = ['Anil', 'Sunil', 'Mahesh']
// const filteredPeople = filterValues(people,
//     function (name) {
//         return name.toLocaleLowerCase().indexOf('a') !== -1
//     }
// )
const filteredPeople = people.filter(
    function (name) {
        return name.toLocaleLowerCase().indexOf('a') !== -1
    }
)

console.log(filteredPeople)

numbers.sort(
    function (a, b) {
        return a - b
    }
)
people.sort(
    function (a, b) {
        return a.localeCompare(b)
    }
)
console.log(numbers)
console.log(people)

const multiplied = numbers.map(
    function (num) {
        return "Value: " + (num * 5)
    }
)
console.log(multiplied)

//find, findIndex etc.
