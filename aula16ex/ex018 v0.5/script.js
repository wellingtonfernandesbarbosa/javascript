let lista = []
let pmenor = document.getElementById('menor')
let pmaior = document.getElementById('maior')
let pmédia = document.getElementById('média')
let psoma = document.getElementById('soma')
let num = document.getElementById('num')
let res = document.getElementById('res')
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
        res.innerHTML = ''
        for (let c in lista) {
            let item = document.createElement('option')
            item.text = `Valor ${lista[c]} adicionado`
            item.value = `v${c}`
            res.appendChild(item)
        }
    } else {
        window.alert('Valor inválido, ou já encontrado.')
    }
}
function analisar() {
    let maior = 0
    let menor = 0
    let soma = 0
    for (let c in lista) {
        if (c == 0) {
            maior = lista[c]
            menor = lista[c]
        } else {
            if (menor > lista[c]) {
                menor = lista[c]
            }
            if (maior < lista[c]) {
                maior = lista[c]
            }
        }
        soma += lista[c]
    }
    total.innerHTML =  `Ao todo temos ${lista.length} valores cadastrados.`
    pmenor.innerHTML = `O menor valor foi ${menor}`
    pmaior.innerHTML = `O maior valor foi ${maior}`
    psoma.innerHTML = `A soma dos valores é ${soma}`
    pmédia.innerHTML = `A média dos valores digitados é ${soma / lista.length}`
}