function taAberto(clienteNaLoja) {
    const horaDeAbrir = new Date(+clienteNaLoja)
    const horaDeFechar = new Date(+clienteNaLoja)

    horaDeAbrir.setHours(8)
    horaDeFechar.setHours(18)

    return +clienteNaLoja >= +horaDeAbrir && +clienteNaLoja <= +horaDeFechar && clienteNaLoja.getDay() >= 1 && clienteNaLoja.getDay() <= 5
}

console.log(taAberto(new Date(2021, 3, 25, 12)))

console.log(taAberto(new Date(2021, 3, 26, 12)))

console.log(taAberto(new Date(2021, 3, 26, 7, 59))) 