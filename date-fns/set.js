const set = require('date-fns/set')

const f = new Date(2017, 3, 21, 8, 0, 0, 0);
const maisF = set(f, {
    years: 4,
    months: 5,
    date: 9,
    hours: 1,
    minutes: 50,
    seconds: 22,
    milliseconds: 600
})
console.log(maisF)

const g = new Date(2018, 5, 15, 18, 0, 0, 0);
console.log(set(g, { date: 27, hours: 4, minutes: 32 }))