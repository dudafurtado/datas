const nascimento = new Date("2003-05-20T09:36:00.000Z")
const primeiroAniversario = new Date("2003-05-20T09:36:00.000Z")

console.log(nascimento === primeiroAniversario)

console.log(+nascimento === +primeiroAniversario)

// Datas são objetos e comparados por referências(se é a mesma informaçõa guardada no mesmo lugar da memória). 
// Se comparados a interpretação é diferente pq são objetos diferentes guardados em lugares diferentes da memória,
// ou seja, para saber se é o mesmo momento ou não é preciso comparar o timestamp e não somente as datas.

const umDia = new Date("2020-03-13T05:24:19.888Z")
const outroDia = umDia

console.log(umDia === outroDia)
// o endereço, ou seja, lugar na memória do momento
