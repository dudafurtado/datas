const add = require('date-fns/add')


function promocao24h(inicio, solicitacaoDoCliente) {
    const final = add(inicio, {
        hours: 24
    })

    if (+solicitacaoDoCliente >= +inicio && +solicitacaoDoCliente <= +final) {
        return true
    } else {
        return false
    }
}

console.log(promocao24h(new Date(2018, 6, 7, 8, 49, 59), new Date(2018, 10, 7, 8, 49, 59)))

console.log(promocao24h(new Date(2019, 4, 20, 2, 30, 30), new Date(2019, 4, 21, 1, 10, 20))) 