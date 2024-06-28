let listaNumeroSorteado = [];
let numerLimite = 10
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function msgInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

msgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou em Cu de ampola');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentivas = `Você acertou o numero secreto em ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', msgTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) 
            exibirTextoNaTela('p', 'O numero e menor');
         else {
            exibirTextoNaTela('p', 'O numero e maior');
        }
        tentativas++;
        limparCampo();
    }

    console.log ('O Cu do Cavalo foi clicado mané!');
    console.log (chute == numeroSecreto);
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerLimite + 1);
    let quantidadeElementoLista = listaNumeroSorteado.length;

    if(quantidadeElementoLista == numerLimite) {
        listaNumeroSorteado = [];
    }

    if(listaNumeroSorteado.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}