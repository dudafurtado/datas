const k = new Date(1997, 7, 22, 18, 31, 80)

const endOfWeek = require('date-fns/endOfWeek')
console.log(endOfWeek(k))

const endOfDecade = require('date-fns/endOfDecade')
console.log(endOfDecade(k))

// especificamente sobre o momento de agora

const endOfToday = require('date-fns/endOfToday')
console.log(endOfToday())

const endOfYesterday = require('date-fns/endOfYesterday')
console.log(endOfYesterday())