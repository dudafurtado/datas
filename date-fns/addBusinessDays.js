const addBussinessDays = require('date-fns/addBusinessDays')

// skipped weekend days
// não considera feriados nacionais, regionais...

const c = new Date(2013, 11, 4)
console.log(addBussinessDays(c, 22))

const maisC = addBussinessDays(c, 50)
console.log(maisC)