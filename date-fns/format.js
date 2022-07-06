const format = require('date-fns/format')

const impressaoData = new Date(2012, 10, 28, 4, 59, 30)

console.log(format(impressaoData, 'dd-MMM-yyyy'))

const formatado = format(impressaoData, "do/Mo/y")
console.log(formatado)

console.log(format(impressaoData, "Do 'dia do ano'"))