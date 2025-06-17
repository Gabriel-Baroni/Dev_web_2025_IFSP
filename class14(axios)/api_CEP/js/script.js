const obtemCep = async(cep) => {
    const resultado =  await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`)
    return resultado
}

const pesquisa = document.getElementById("pesquisa")
pesquisa.addEventListener("click", async (e) =>{
    e.preventDefault;
    const input = document.getElementById("cep");
    const cep = input.value;
    const result =  await obtemCep(cep);
    const resposta = document.getElementById("resposta")
    resposta.innerHTML = 
    `A rua é: ${result.data.address},
    O bairro é: ${result.data.district},
    A cidade é: ${result.data.city},
    O estado é: ${result.data.state}`;
    input.value = ""
});
