import { Evento, Agenda } from './class.js';
let r="sim"
let agenda = new Agenda()
let dono = prompt("Digite o nome do dono da agenda:")
while (r == "sim"){
   alert("Opções:\n1-Inserir evento\n2-Ler agenda")
   let opcao = Number(prompt("Digite sua opção:"))

   if (opcao ==1){
      let nome= prompt("Digite o nome do evento:")
      let local= prompt("Digite o local do evento:")
      let data= prompt("Digite a data do evento:")
      let evento = new Evento()
      evento.setNome(nome)
      evento.setLocal(local)
      evento.setData(data)
      console.log("Nome:" + evento.getNome())
      console.log("Local:" + evento.getLocal())
      console.log("Data:" + evento.getData())
   }

   else if (opcao == 2){
      alert(`A sua agenda está assim:\nDono: ${agenda.getDono()}\nEventos:\n${agenda.getEventos()}`)
   }

     r= prompt("Deseja continuar?")
}
