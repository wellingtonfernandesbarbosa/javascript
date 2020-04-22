function contar() {
    let início = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    let msg = document.getElementById('msg')

    if (início.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = '[ERRO] Faltam dados. Impossível contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(início.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (passo.value.length == 0) {
            msg.innerHTML = 'Passo inválido! Considerando PASSO 1'
            p = Number(1)
        }
        if (i < f) {
            // Contagem progressiva
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f){
            // Contagem regressiva
            for (let c = i; c >= 1; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
