const add = require('date-fns/add');

const a = new Date(2000, 5, 6, 12, 21, 44)
const soma = add(a, {
    years: 78,
    months: 5,
    weeks: 9,
    days: 3,
    hours: 3,
    minutes: 2,
    seconds: 30
})
console.log(soma)
console.log(a)

const hoje = new Date()
console.log(add(hoje, {
    weeks: 3,
    hours: 24
}))

console.log(hoje)

let b = new Date(1977)
b = add(b, {
    days: 29,
    months: 3,
    hours: 7,
    minutes: 47
})
console.log(b)