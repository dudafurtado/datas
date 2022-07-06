const d = new Date()
const e = new Date(2015, 3, 9, 16, 31, 20)

// calcula o da esquerda menos (-) o da direita
// esquerda futuro e direita passado

const differenceInDays = require('date-fns/differenceInDays')

console.log(differenceInDays(d, e))

const differenceInHours = require('date-fns/differenceInHours')

console.log(differenceInHours(d, e))

const difference = require('date-fns/differenceInCalendarISOWeeks')

console.log(difference(d, e))