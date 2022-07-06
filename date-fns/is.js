const h = new Date(2001, 7, 28, 22, 46, 52)
const i = new Date(2000, 6, 9, 10, 5, 46)

const isAfter = require('date-fns/isAfter')
console.log(isAfter(h, i))

const isBefore = require('date-fns/isBefore')
console.log(isBefore(h, i))

// a pergunta é feita do primeiro argumento para o segundo
// (date, dateToCompare)

const isTuesday = require('date-fns/isTuesday')
console.log(isTuesday(h))

const isWeekend = require('date-fns/isWeekend')
console.log(isWeekend(i))

// const isTomorrow = require('date-fns/isTomorrow')
// console.log(isTomorrow(new Date() + 1))