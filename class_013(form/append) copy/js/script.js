

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
var total = 0
var concluido = 0
const container = document.getElementById("contador");
const total1 = document.createElement("h1");
const concluido1 = document.createElement("h1");
const adicionar = document.getElementById("add");
adicionar.addEventListener("click", (e) =>{
    e.preventDefault();
    total = total + 1; 
    total1.textContent = `Total de tarefas: ${total}`;
    container.appendChild(total1)
    if (tarefa.value === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
      }  
    else{
        const form = document.getElementById("form");
        const h1 = document.createElement("h1");
        h1.textContent = "Tarefa adicionada com sucesso";
        form.appendChild(h1);
        setTimeout(() => {
            form.removeChild(h1)
        }, 2000);
        const tarefas = document.getElementById("tarefas");
        const div = document.createElement("div");
        div.innerHTML = tarefa.value;
        const remover = document.createElement("button");
        const finalizar = document.createElement("button");
        const editar = document.createElement("button");
        remover.innerHTML = "Remover";
        div.appendChild(remover);
        editar.innerHTML = "Editar";
        div.appendChild(editar);
        finalizar.innerHTML = "Finalizar";
        div.appendChild(finalizar);
        div.classList.add("item")
        tarefas.appendChild(div);
        tarefa.value = "";

        remover.addEventListener("click", () => {
            tarefas.removeChild(div);
            total = total - 1; 
            total1.textContent = `Total de tarefas: ${total}`
        });
    
        finalizar.addEventListener("click", () => {
            div.classList.toggle("finalizado");
            if (div.classList.contains("finalizado")) {
                concluido = concluido + 1;
            } else {
                concluido = concluido - 1;
            }
            concluido1.textContent = `Total de tarefas concluidas: ${concluido}`;
            container.appendChild(concluido1);
        });

        editar.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.createElement("input");
            const texto = div.childNodes[0].nodeValue;
            input.type = "text";
            input.placeholder = texto;
            div.childNodes[0].nodeValue = "";
            div.insertBefore(input, remover);
            input.addEventListener("keydown", (e) =>{
                if (e.key === "Enter"){
                    div.childNodes[0].nodeValue = input.value;
                    div.removeChild(input);
                }
            });

        });


function filtrarTarefas(tipo) {
    const tarefas = document.querySelectorAll('#tarefas .item');
    tarefas.forEach(div => {
        if (tipo === 'todas') {
            div.style.display = '';
        } else if (tipo === 'concluidas') {
            div.style.display = div.classList.contains('finalizado') ? '' : 'none';
        } else if (tipo === 'pendentes') {
            div.style.display = !div.classList.contains('finalizado') ? '' : 'none';
        }
    });
}
document.getElementById('filtro-todas').addEventListener('click', () => filtrarTarefas('todas'));
document.getElementById('filtro-concluidas').addEventListener('click', () => filtrarTarefas('concluidas'));
document.getElementById('filtro-pendentes').addEventListener('click', () => filtrarTarefas('pendentes'));



    }
})

