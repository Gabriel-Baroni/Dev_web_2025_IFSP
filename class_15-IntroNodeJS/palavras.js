function contarPalavras (a){
    const lista = a.split(" ")
    const contagem = lista.length
    return `A contagem de palavras é: ${contagem}`

}

function contarletras (a){
    const b = a.replace(/\s/g, "")
    const contagem = b.length
    return `A contagem de letras é: ${contagem}`

}

function FrequenciaDaPalavra (a, b){
    const lista = a.split(" ")
    let contagem = 0
    for (let palavra of lista) {
        if (palavra == b){
            contagem +=1
        }
    }
    return `A Frequência da palavra "${b}" é: ${contagem}`
}

module.exports = {contarletras, contarPalavras, FrequenciaDaPalavra}

