export class Evento{
    constructor(){
        this.nome= '';
        this.local = '';
        this.data = '';
    }

    setNome(nome){
        this.nome=nome
    }

    setLocal(local){
        this.local=local
    }
    setData(data){
        this.data=data
    }

    getNome(){
        return this.nome
    }
    getLocal(){
        return this.local
    }
    getData(){
        return this.data
    }
}

export class Agenda{
    constructor(){
        this.eventos = [];
        this.dono = '';
    }

    setDono(dono){
        this.dono=dono
    }

    setEventos(evento){
        this.eventos.push(evento)
    }

    getDono(){
        return this.dono
    }

    getEventos(){
        return this.eventos
    }
}

