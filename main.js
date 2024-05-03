//Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const image2 = document.querySelector(".screen1 #image1")

/*Geração de frases com "frasesBiscoito", seleção aleatoria com
"randomMensage" e impressão com "mensageSelect"*/ 

let frasesBiscoito = [
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias você se reinventa.",
    "A vida é uma viagem, não um destino.",
    "Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.",
    "Acredite em milagres, mas não dependa deles.",
    "A verdadeira sorte consiste em encontrar alegria nas pequenas coisas da vida."
]
let randomMensage = Math.floor(Math.random() * frasesBiscoito.length);
let mensageSelect = frasesBiscoito[randomMensage];


//Funções
//Função de troca de telas e troca de frases ao abrir o biscoito
function handleTryClick (event) {
    event.preventDefault()/
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("p").innerText = `${mensageSelect}`
}

//Eventos
image2.addEventListener('click', handleTryClick)