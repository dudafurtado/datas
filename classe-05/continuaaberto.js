function taAberto(clienteNaLoja) {
    const horaDeAbrir = new Date(+clienteNaLoja)
    const horaDeFechar = new Date(+clienteNaLoja)

    horaDeAbrir.setHours(8)
    horaDeFechar.setHours(18)

    if (clienteNaLoja.getDay() === 6) {
        horaDeFechar.setHours(12)
    }

    return +clienteNaLoja >= +horaDeAbrir && +clienteNaLoja <= +horaDeFechar && clienteNaLoja.getDay() >= 1 && clienteNaLoja.getDay() <= 6
}

console.log(taAberto(new Date(2021, 3, 25, 12)))
console.log(taAberto(new Date(2021, 3, 26, 12)))
console.log(taAberto(new Date(2021, 3, 26, 7, 59)))
console.log(taAberto(new Date(2021, 3, 24, 9, 30)))