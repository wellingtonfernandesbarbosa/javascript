function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora < 10) {
        hora = '0' + hora
    }
    var minutos = data.getMinutes()
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#fae8bc'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#e5af7d'
    } else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#2e444c'
    }
}
