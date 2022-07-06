const copaDoMundo = new Date(2002, 5, 30, 8)

const primeiroGol = (+copaDoMundo + (45 + 15 + 22) * 60 * 1000)
const primeiroGolDate = new Date(primeiroGol)
console.log(primeiroGolDate)

const segundoGol = (+primeiroGol + (12) * 60 * 1000)
const segundoGolDate = new Date(segundoGol)
console.log(segundoGolDate)