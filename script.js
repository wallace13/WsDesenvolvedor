const titulo = document.getElementById("titulo");
const coluna1 = document.querySelector("#coluna1");
const coluna2 = document.querySelector("#coluna2");

const imagesEstop = [
    {nome: `images/estop/telaPrincipal.jpg`, descricao: 'Tela Principal.'},
    {nome: `images/estop/telaCliente.jpg`,descricao: 'Aba do Cliente.'},
    {nome: `images/estop/login.png`, descricao: 'Tela de Login.'},
    {nome: `images/estop/telaCaixa.jpg`, descricao: 'Aba do Caixa.'},
    {nome: `images/estop/telaPreco.jpg`, descricao: 'Aba de Preços.'},
    {nome: `images/estop/telaGerencia.jpg`, descricao: 'Aba da Gerencia.'},
];
const imagesDugsmash = [
    {nome: `images/dubsmash/startGame.png`, descricao: 'Tela Principal.'},
    {nome: `images/dubsmash/jogo.png`,descricao: 'Tela do Game.'},
    {nome: `images/dubsmash/venceu.png`, descricao: 'Tela do Vencedor.'},
    {nome: `images/dubsmash/gameOver.png`, descricao: 'Tela do Game Over.'},
    {nome: `images/dubsmash/telasMobile.png`, descricao: 'Telas Mobile.'},
];
const imagesSimcov = [
    {nome: `images/simcov/AbaPrincipal.png`, descricao: 'Tela Principal.'},
    {nome: `images/simcov/AbaCovid.png`,descricao: 'Central da Covid.'},
    {nome: `images/simcov/AbaLogin.png`, descricao: 'Tela de Login.'},
];
const imagesSicopes = [
    {nome: `images/sicopes/telaPrincipal.png`, descricao: 'Tela Principal.'},
    {nome: `images/sicopes/telaVotacao.png`,descricao: 'Tela de Votação.'},
    {nome: `images/sicopes/telaLogin.png`, descricao: 'Tela de Login.'},
    {nome: `images/sicopes/menuPrincipal.png`, descricao: 'Menu Principal.'},
    {nome: `images/sicopes/andamentoVotacao.png`,descricao: 'Andamento da Votação.'},
    {nome: `images/sicopes/balancoAnual.png`, descricao: 'Tela do Balanço Anual.'},
];

const modal = {
    estop:
    {
        titulo: "ESTOP - Sistema de Gerenciamento de Estacionamento.",
        imagens: imagesEstop,
        link: 'https://wallace13.github.io/estop/',
        botao: 'Saiba Mais',
    },
    dugsmash:
    {
        titulo: "Dub Smash - Game de Matar Moscas.",
        imagens: imagesDugsmash,
        link: 'https://wallace13.github.io/dubSmash/',
        botao: 'Jogue Agora',
    },
    simcov:
    {
        titulo: "SIMCOV - Sistema Integrado de Monitoramento dos Casos de Covid.",
        imagens: imagesSimcov,
        link: '0',
        botao: '0',
    },
    sicopes:
    {
        titulo: "SICOPES - Sistema Integrado de Controle e Pesquisa de Satisfação.",
        imagens: imagesSicopes,
        link: '0',
        botao: '0',
    },
};
function criaImagens($this){
    let index = 0;
    for (const image of modal[$this]['imagens']) {
        index++;
        let html =
        `<figure class="figure">
            <img class="img-thumbnail" src="${image['nome']}" alt="erro">
            <figcaption class="figure-caption">${image['descricao']}</figcaption>
        </figure>`;
        if (index <= 3) {
            let div = document.createElement('div');
            div.setAttribute('class', `col`);
            div.setAttribute('id', `imagens${index}`);
            div.innerHTML = html;
            document.getElementById('coluna1').appendChild(div);

        } else {
            let div = document.createElement('div');
            div.setAttribute('class', `col`);
            div.setAttribute('id', `imagens${index}`);
            div.innerHTML = html;
            document.getElementById('coluna2').appendChild(div);
        }
    }
}
function criaBotao(){
    let botao = document.createElement('a');
    botao.setAttribute('target', `_blank`);
    botao.setAttribute('class', `btn btn-primary`);
    botao.setAttribute('id', `rodape`);
    document.getElementById('botao').appendChild(botao);
}
function criaModal($this){
    if(titulo.innerText == ""){
        titulo.appendChild(document.createTextNode(modal[$this]['titulo']));
        criaImagens($this);

        if(modal[$this]['botao'] != "0"){
            criaBotao();
            rodape.setAttribute('href',modal[$this]['link']);
            rodape.appendChild(document.createTextNode(modal[$this]['botao']));
        }
    }else{
        titulo.innerText=modal[$this]['titulo'];
        criaImagens($this);

        if(modal[$this]['botao'] != "0"){
            criaBotao();
            rodape.innerText=modal[$this]['botao'];
            rodape.setAttribute('href',modal[$this]['link']);
        }
    }
}
function limpaModal(){
    var count = document.getElementsByTagName('figure').length;
    let i = 1;
    while (i <=count) {
        const img = document.querySelector(`#imagens${i}`);
        if (img.parentNode) {
            img.parentNode.removeChild(img);
        }
        i++;
    }
    const botao = document.querySelector(`#rodape`);
    if(document.getElementById("rodape")){
        if (botao.parentNode) {
            botao.parentNode.removeChild(botao);
        }
    }
}