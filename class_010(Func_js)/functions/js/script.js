// let rolaDados = function (){
//     let dado = Math.floor(Math.random()*6)+1
//     console.log(dado)
// }
// let chamaDuasVezes = function(func){
//     func();
//     func();
// }
// chamaDuasVezes(rolaDados);


// ARROW FUNCTION:
// Troca o termo function por => 

    let rolaDados = ()=>{
    let dado = Math.floor(Math.random()*6)+1
    console.log(dado)
}

    let chamaDuasVezes = (func) =>{
    func();
    func();
}
chamaDuasVezes(rolaDados);