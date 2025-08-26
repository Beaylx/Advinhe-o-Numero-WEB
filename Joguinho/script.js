let numeroEscolhido = Math.floor(Math.random() * 20) + 1;


function principal(numeroEscolhido, chute) {
    if (chute == numeroEscolhido) {
        return "Acertou!";
    } else if (numeroEscolhido > chute) {
        return "O número é maior!";
    } else if (numeroEscolhido < chute) {
        return "O número é menor!";
    }
}

const form = document.getElementById("form-palpite");
const input = document.getElementById("palpite");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let chute = Number(input.value);
    let resposta = principal(numeroEscolhido, chute);
    resultado.textContent = resposta;
});
