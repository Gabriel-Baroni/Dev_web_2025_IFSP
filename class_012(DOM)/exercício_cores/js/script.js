ArrayCores = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange'
];

let promessa = (cor) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = cor;
            resolve();
        }, 1000);
    });
}

let mudarCor = async () => {
    while (true){
        await promessa(ArrayCores[0]);
        await promessa(ArrayCores[1]);
        await promessa(ArrayCores[2]);
        await promessa(ArrayCores[3]);
        await promessa(ArrayCores[4]);
        await promessa(ArrayCores[5]);
    }
}

mudarCor();
