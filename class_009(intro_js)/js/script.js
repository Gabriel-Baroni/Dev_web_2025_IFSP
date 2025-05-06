// function converter_cf(c){
//     return (c * (9/5)) + 32
// }

// function converter_fc(f){
//     return (f-32) * (5/9)
// }

// var celsius = Number(window.prompt("Celsius:"));
// var fahrenheit = Number(window.prompt("Fahrenheit:"));

// var f = converter_cf (celsius);
// var c = converter_fc (fahrenheit);

// alert(`O resultado em fahrenheit é: ${f} \nO resultado em celsius é: ${c}`);


// var array = []; 

// array = [1, 2.3, "três", [4,5]];
// console.log(array[3][0]);

var agenda = [];  
var r = "sim";

function inserir (e){
    return agenda.push(e);
}

function editar (i, n){
    agenda[i]=n; 

    }




while (r=="sim"){
    alert("Opções:\n1-Inserir evento\n2-Ler agenda\n3-Editar evento")
    var opcao = Number(window.prompt("Digite sua opção:"))
    if (opcao == 1){
        var evento = [];
        var nome = window.prompt("Digite o nome do evento:");
        var data = window.prompt("Digite a data do evento:");
        var local = window.prompt("Digite o local do evento:");
        evento.push(`(${nome}, ${data}, ${local}) `);
        inserir(evento);
    }
    else if (opcao == 2){
        alert(`A sua agenda esta assim: ${agenda}`)

    }
    else if (opcao == 3){
        var indice = Number(window.prompt("Qual índice deseja alterar?"));
        var nome = window.prompt("Digite o novo nome do evento:");
        var data = window.prompt("Digite a nova data do evento:");
        var local = window.prompt("Digite o novo local do evento:");
        var novo = `(${nome}, ${data}, ${local})`;
        editar(indice, novo);
        alert(`A sua agenda está assim:\n${agenda.join("\n")}`);
    }
    r = window.prompt("Quer continuar? [sim/não]")

}