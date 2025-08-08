const mymath = require('./meumath');
const myPalavras = require('./palavras')

console.log(
mymath.Soma(2, 3),
mymath.Divisao(10,2),
mymath.Subtracao(5,6),
mymath.Potenciacao(10,2),
mymath.Multiplicacao(5, 2))

console.log(
myPalavras.FrequenciaDaPalavra("oi como que você esta oi","oi"), 
myPalavras.contarPalavras("oi como que você esta oi",), 
myPalavras.contarletras("oi como que você esta oi",))




