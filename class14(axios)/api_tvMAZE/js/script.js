

const obtemObra = async(obra) => {
    const resultado =  await axios.get(`https://api.tvmaze.com/search/shows?q=.${obra}`)
    return resultado
}
const botao = document.getElementById("botao")
botao.addEventListener("click", async() =>{
    // Pegar o JSON
    const input = document.getElementById("input")
    const valor = input.value
    const novoCaractere = "+";
    const stringFormatada = valor.replace(/\s/g, novoCaractere);
    const result =  await obtemObra(stringFormatada);

  const card = document.getElementById("resultados")
  card.innerHTML = "";
    // Criar os elementos
    for (let i=0; i< result.data.length; i++){
        const div = document.createElement("div")
        const score = document.createElement("p");
        score.textContent = `O score é: ${result.data[i].score}`
        div.appendChild(score)
        const name = document.createElement("p");
        name.textContent = `O nome é: ${result.data[i].show.name}`
        div.appendChild(name)
        if (result.data[i].show.image && result.data[i].show.image.medium) {
            const img = document.createElement("img")
            img.src = result.data[i].show.image.medium
            div.appendChild(img);
        } else {
            const aviso = document.createElement("p");
            aviso.textContent = "Imagem não disponível";
            div.appendChild(aviso);
        }
        div.classList.add("card")
        card.appendChild(div)
    }

});


