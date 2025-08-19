

let numeroEscolhido = Math.random()
numeroEscolhido = numeroEscolhido*10
Math.floor(numeroEscolhido)
let chute = [2]
function principal(numeroEscolhido, chute) {
    if (chute == numeroEscolhido) {
        console.log("Acertou!") }
    else if (numeroEscolhido>chute){
        console.log("Maior!") }
    else if (numeroEscolhido<chute) {
        console.log("Menor!") }
    
}

