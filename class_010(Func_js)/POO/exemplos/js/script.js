class Animal{

    constructor(){
        this.nome = '';
        this.idade = '';
        this.cor = '';
    }
    
    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    getNome(){
        return this.nome
    }
     getIdade(){
        return this.idade
    }

}

let animal1 = new Animal()
animal1.setIdade(7)
animal1.setNome('Max')

animal1.getNome()
animal1.getIdade()

let animal2 = new Animal()
animal2.setIdade(2)
animal2.setNome('Lico')

animal2.getNome()
animal2.getIdade()

console.log("Nome:" + animal1.getNome())
console.log("Idade:" +animal1.getIdade())
console.log("Nome:" +animal2.getNome())
console.log("Idade:" +animal2.getIdade())