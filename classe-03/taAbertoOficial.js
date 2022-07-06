function taAberto(clienteNaLoja) {
    const horaDeAbrir = new Date(+clienteNaLoja)
    const horaDeFechar = new Date(+clienteNaLoja)

    horaDeAbrir.setHours(8)
    horaDeFechar.setHours(18)

    return +clienteNaLoja >= +horaDeAbrir && +clienteNaLoja <= +horaDeFechar
}

console.log(taAberto(new Date(2015, 1, 1, 12)))
console.log(taAberto(new Date(2015, 1, 1, 2))) 