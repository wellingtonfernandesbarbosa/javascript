function tabuada() {
    let num = document.getElementById('number') // Capturando o número inserido pelo usuário
    let tab = document.getElementById('seltab') // Capturando a área da tabela do corpo HTML
    if (num.value.length == 0) { // Verifivando o número inserido pelo usuário
        window.alert ('Digite um número válido') // Mensagem de erro para digito incorreto
    } else {
        let n = Number(num.value) // Definindo a variável 'n' com definição de valor
        let c = 1 // Definindo a variável 'c'
        tab.innerHTML = '' // Limpando a área da tabela
        do {
            let item = document.createElement('option') // Definindo um novo elemento para a tabela
            item.text = `${c} x ${n} = ${c*n}` // Definindo o texto do elemento
            item.value = `tab${c}` // Definindo o valor do elemento (mais útil em outras linguagens de programação)
            tab.appendChild(item) // Inserindo o elemento na tabela
            c++ // Adicionando mais um número à variável 'c'
        } while (c <= 10)
    }
}