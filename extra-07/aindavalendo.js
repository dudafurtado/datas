const add = require('date-fns/add')


function promocao24h(inicio, solicitacaoDoCliente) {
    const final = add(inicio, {
        days: 30
    })

    if (+solicitacaoDoCliente >= +inicio && +solicitacaoDoCliente <= +final) {
        return true
    } else {
        return false
    }
}

console.log(promocao24h(new Date(2021, 3, 1,), new Date(2021, 6, 1)))

console.log(promocao24h(new Date(2010, 10, 5), new Date(2010, 11, 2))) 