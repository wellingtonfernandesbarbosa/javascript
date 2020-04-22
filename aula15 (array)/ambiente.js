let vaga = ['Model S', 'Aventador', 'Camaro', 'Mustang']
vaga.push('Fusca')
vaga[2] = ('Corvete')
console.log(vaga)
console.log(`O array/vetor tem ${vaga.length} elementos`)
for ( let c in vaga) {
    console.log(`O ${vaga[c]} está na ${Number(c) + 1}ª Vaga`)
}