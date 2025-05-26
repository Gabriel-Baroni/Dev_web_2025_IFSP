const tema = document.getElementById("tema");
tema.addEventListener("change", (event) => {
    const main = document.querySelector(".conteudo");
    if (event.target.checked) {
        main.classList.remove("dark-mode")
        main.classList.add("light-mode")  
    } else {
        main.classList.remove("light-mode")
        main.classList.add("dark-mode")   
    }
  });

const adicionar = document.getElementById("add");
adicionar.addEventListener("click", () =>{
    const tarefas = document.getElementById("tarefas");
    const div = document.createElement("div");
    div.innerHTML = tarefa.value;
    const remover = document.createElement("button");
    const finalizar = document.createElement("button");
    remover.innerHTML = "Remover";
    div.appendChild(remover);
    finalizar.innerHTML = "Finalizar";
    div.appendChild(finalizar);
    div.classList.add("item")
    tarefas.appendChild(div);
    tarefa.value = "";
    
    remover.addEventListener("click", () => {
        tarefas.removeChild(div);
    });

    finalizar.addEventListener("click", () => {
        div.classList.toggle("finalizado");
    });
})

