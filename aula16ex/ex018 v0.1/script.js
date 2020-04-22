let lista = []
let pmenor = document.getElementById('menor')
let pmaior = document.getElementById('maior')
let pmédia = document.getElementById('média')
let psoma = document.getElementById('soma')
let num = document.getElementById('num')
let res = document.getElementById('res')
let total = document.getElementById('total')

function adicionar() {
    let pos = lista.indexOf(Number(num.value))
    if (pos == -1) {
        if (num.value < 1 || num.value > 100){
            window.alert('Digite um número entre 1 e 100.')
        } else {
            lista.push(Number(num.value))
            res.innerHTML = ''
            for (let c in lista) {
                let item = document.createElement('option')
                item.text = `Valor ${lista[c]} adicionado`
                item.value = `v${c}`
                res.appendChild(item)
            }
        }
    } else {
        window.alert('Valor repetido, digite outro valor.')
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