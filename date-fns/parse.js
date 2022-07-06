const parse = require('date-fns/parse')

const aniversario = "20/05/2003"
const transformado = parse(aniversario, "dd/MM/yyyy", new Date())
console.log(transformado)

const diaAleatorio = "08 do 03 de 1998"
const transformado2 = parse(diaAleatorio, "MM 'do' dd 'de' yyyy", +new Date())
console.log(+transformado2)