// document.body.style.backgroundColor = 'red';

// let h1 = document.querySelector('h1');
// h1.style.backgroundColor = 'blue';

// let h2Array = document.querySelectorAll('h2');

// h2Array.forEach((el) => {
//     el.style.backgroundColor = 'orange';
// });


// setTimeout(() => {
//     console.log("Primeiro")
// }, 3000);

// setTimeout(() => {
//     console.log("Segundo")
// }, 3000);


// setTimeout(() => {
//     console.log("Terceiro")
// }, 3000);

let retornaPromessa = (ordem) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log(`Passou 2 segundos (${ordem})`);
            resolve();
        }, 2000);
    });
}
let fazTimeout = async()=>{
    await retornaPromessa("primeiro");
    await retornaPromessa("segundo");
    await retornaPromessa("terceiro");
}

fazTimeout();