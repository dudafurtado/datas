const dia2 = new Date(2016, 5, 22, 7, 57, 20)

dia2.setDate(19)
console.log(dia2)

console.log(dia2.setFullYear(2011))

dia2.setMilliseconds(1111)
console.log(dia2)

console.log(dia2.setMonth(6))


const dia3 = new Date(1844, 0, 2, 9, 45, 50)
dia3.setDate(dia3.getDate() - 30)
console.log(dia3)

dia3.setHours(dia3.getHours() - 24)
console.log(dia3)