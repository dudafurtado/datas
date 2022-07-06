const dateLeft = new Date(2005, 8, 18, 22, 51, 38)
const dateRight = new Date(2005, 8, 18, 21, 51, 38)

// calcula o da esquerda menos (-) o da direita
// esquerda futuro e direita passado

// const isSameDay = require('date-fns/isSameDay')
// console.log(isSameDay(dateLeft, dateRight))

const isSameHour = require('date-fns/isSameHour')
console.log(isSameHour(dateLeft, dateRight))

const isSameMinute = require('date-fns/isSameMinute')
console.log(isSameMinute(dateLeft, dateRight))

const isSameMonth = require('date-fns/isSameMonth')
console.log(isSameMonth(dateLeft, dateRight))

const isSameSecond = require('date-fns/isSameSecond')
console.log(isSameSecond(dateLeft, dateRight))
