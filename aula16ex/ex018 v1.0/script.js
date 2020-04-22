let lista = []
let pmenor = document.getElementById('menor')
let pmaior = document.getElementById('maior')
let pmédia = document.getElementById('média')
let psoma = document.getElementById('soma')
let num = document.getElementById('num')
let tab = document.getElementById('tab')
let total = document.getElementById('total')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(Number(num.value))
        tab.innerHTML = ''
        for (let c in lista) {
            let item = document.createElement('option')
            item.text = `Valor ${lista[c]} adicionado`
            item.value = `v${c}`
            tab.appendChild(item)
            res.innerHTML = ''
        }
    } else {
        window.alert('Valor inválido, ou já encontrado.')
    }
    num.value = ''
    num.focus()
}
function analisar() {
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    for (let c in lista) {
        if (menor > lista[c]) {
            menor = lista[c]
        }
        if (maior < lista[c]) {
            maior = lista[c]
        }
        soma += lista[c]
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${lista.length} valores cadastrados.</p>`
    res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
    res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}.</p>`
}