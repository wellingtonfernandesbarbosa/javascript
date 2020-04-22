let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
num = 3
let pos = valores.indexOf(num)
let soma = 0
if (pos == -1) {
    console.log(`O valor ${num} não se encontra no array/vetor`)
} else {
    console.log(`O valor ${num} se encontra na posição ${pos}`)
}
for (let c in valores) {
    console.log(`A ${c}ª posição tem o valor ${valores[c]}`)
    soma += (valores[c])
}
console.log(`A soma de todos os valores do array é ${soma}`)