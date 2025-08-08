const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

rl.question("Digite um número: ", function(a){
    rl.question("Digite um número: ", function(b){

       a = Number(a)
       b = Number(b)
       console.log(a+b)

        rl.close()
    });
});
