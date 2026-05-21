let element = document.querySelector(".sobre-mim");

const frases = ["Sobre mim"];
let fraseIndex = 0;
let charIndex = 0;
let apagando = false;

function digitar() {
    const fraseAtual = frases[fraseIndex];

    if (!apagando) {
        // Correção aqui: Apenas passamos o charIndex, o incremento acontece na linha de baixo
        element.textContent = fraseAtual.substring(0, charIndex) + "|";
        charIndex++;

        if (charIndex > fraseAtual.length) {
            apagando = true;
            setTimeout(digitar, 1500); // Pausa cheio
            return;
        }
    } else {
        charIndex--;
        element.textContent = fraseAtual.substring(0, charIndex) + "|"; // Mantém o cursor sumindo

        if (charIndex === 0) {
            apagando = false;
            fraseIndex = (fraseIndex + 1) % frases.length;
            setTimeout(digitar, 500); // Pausa vazio
            return;
        }
    }

    setTimeout(digitar, apagando ? 40 : 100);
}

digitar();

