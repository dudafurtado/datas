const format = require('date-fns/format')

function formatacaoA(date) {
    console.log(format(date, "dd 'de' MMMM 'de' yyyy"))
}

formatacaoA(new Date(2020, 9, 5))

function formatacaoB(date) {
    console.log(format(date, 'dd/MM/yyyy'))
}

formatacaoB(new Date(2020, 9, 5))

function formatacaoC(date) {
    console.log(format(date, "d MMM"))
}

formatacaoC(new Date(2020, 9, 5))

function formatacaoD(date) {
    console.log(format(date, 'dd MMM yyyy'))
}

formatacaoD(new Date(2020, 9, 5))

function formatacaoE(date) {
    console.log(format(date, "dd 'de' MMM 'de' yyyy"))
}

formatacaoE(new Date(2020, 9, 5))

function formatacaoF(date) {
    console.log(format(date, 'dd/MMM'))
}

formatacaoF(new Date(2020, 9, 5))