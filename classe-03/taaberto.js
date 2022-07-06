let quandoAbre = new Date(2015, 1, 1, 8)
let quandoFecha = new Date(2015, 1, 1, 18)

let itIsOpen = false

let horaAtual;

function funcionamentoDaLoja(horaAtual) {
    if (+horaAtual >= +quandoAbre && +horaAtual <= +quandoFecha) {
        itIsOpen = true
    }

    return itIsOpen
}

funcionamentoDaLoja(new Date(2015, 1, 1, 12))
funcionamentoDaLoja(new Date(2015, 1, 1, 2))