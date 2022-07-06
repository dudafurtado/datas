const j = new Date(2020, 6, 23, 19, 20, 48)


const startOfMinute = require('date-fns/startOfMinute')
console.log(startOfMinute(j))

const startOfHour = require('date-fns/startOfHour')
console.log(startOfHour(j))

const startOfDay = require('date-fns/startOfDay')
console.log(startOfDay(j))

const startOfMonth = require('date-fns/startOfMonth')
console.log(startOfMonth(j))

const startOfYear = require('date-fns/startOfYear')
console.log(startOfYear(j))