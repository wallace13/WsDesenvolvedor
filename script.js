let currentLang = 'en';

const titulo = document.getElementById("titulo"); const coluna1 = document.querySelector("#coluna1"); const coluna2 = document.querySelector("#coluna2");
const imagesEstop = [
  { nome: `images/estop/telaPrincipal.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/estop/telaCliente.jpg`, descricaoPt: 'Aba do Cliente.', descricaoEn: 'Client Tab.' },
  { nome: `images/estop/login.jpg`, descricaoPt: 'Tela de Login.', descricaoEn: 'Login Screen.' },
  { nome: `images/estop/telaCaixa.jpg`, descricaoPt: 'Aba do Caixa.', descricaoEn: 'Cashier Tab.' },
  { nome: `images/estop/telaPreco.jpg`, descricaoPt: 'Aba de Preços.', descricaoEn: 'Price Tab.' },
  { nome: `images/estop/telaGerencia.jpg`, descricaoPt: 'Aba da Gerencia.', descricaoEn: 'Management Tab.' },
];

const imagesDashboardEnglish = [
  { nome: `images/dashboard/telaHome.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/dashboard/telaSignificado.jpg`, descricaoPt: 'Modal Significado.', descricaoEn: 'Meaning Modal.' },
  { nome: `images/dashboard/telaEditar.jpg`, descricaoPt: 'Modal Edição.', descricaoEn: 'Edit Modal.' },
  { nome: `images/dashboard/telaTraducao.jpg`, descricaoPt: 'Tela Tradução.', descricaoEn: 'Translation Screen.' },
  { nome: `images/dashboard/telaOpcoes.jpg`, descricaoPt: 'Telas Opções.', descricaoEn: 'Options Screens.' },
  { nome: `images/dashboard/telaMobile.jpg`, descricaoPt: 'Multi Telas Mobile.', descricaoEn: 'Multiple Mobile Screens.' },
];

const imagesBugsmash = [
  { nome: `images/dubsmash/startGame.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/dubsmash/jogo.jpg`, descricaoPt: 'Tela do Game.', descricaoEn: 'Game Screen.' },
  { nome: `images/dubsmash/venceu.jpg`, descricaoPt: 'Tela do Vencedor.', descricaoEn: 'Winner Screen.' },
  { nome: `images/dubsmash/gameOver.jpg`, descricaoPt: 'Tela do Game Over.', descricaoEn: 'Game Over Screen.' },
  { nome: `images/dubsmash/telasMobile.jpg`, descricaoPt: 'Telas Mobile.', descricaoEn: 'Mobile Screens.' },
  { nome: `images/dubsmash/multiTela.jpg`, descricaoPt: 'Multi Telas Mobile.', descricaoEn: 'Multiple Mobile Screens.' },
];

const imagesSimcov = [
  { nome: `images/simcov/AbaPrincipal.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/simcov/AbaCovid.jpg`, descricaoPt: 'Central da Covid.', descricaoEn: 'Covid Center.' },
  { nome: `images/simcov/AbaLogin.jpg`, descricaoPt: 'Tela de Login.', descricaoEn: 'Login Screen.' },
  { nome: `images/simcov/AbaEntrada.jpg`, descricaoPt: 'Tela de Registrar Entrada.', descricaoEn: 'Entry Registration Screen.' },
  { nome: `images/simcov/AbaSaida.jpg`, descricaoPt: 'Tela de Registrar Saída.', descricaoEn: 'Exit Registration Screen.' },
  { nome: `images/simcov/AbaPaciente.jpg`, descricaoPt: 'Tela de Cadastrar Paciente.', descricaoEn: 'Patient Registration Screen.' },
];

const imagesSicopes = [
  { nome: `images/sicopes/telaPrincipal.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/sicopes/telaVotacao.jpg`, descricaoPt: 'Tela de Votação.', descricaoEn: 'Voting Screen.' },
  { nome: `images/sicopes/telaLogin.jpg`, descricaoPt: 'Tela de Login.', descricaoEn: 'Login Screen.' },
  { nome: `images/sicopes/sugestoes.jpg`, descricaoPt: 'Tela de Sugestões.', descricaoEn: 'Suggestions Screen.' },
  { nome: `images/sicopes/andamentoVotacao.jpg`, descricaoPt: 'Andamento da Votação.', descricaoEn: 'Voting Progress.' },
  { nome: `images/sicopes/balancoAnual.jpg`, descricaoPt: 'Tela do Balanço Anual.', descricaoEn: 'Annual Balance Screen.' },
];

const imagesSinoWeb = [
  { nome: `images/sinoweb/telaPrincipal.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/sinoweb/telaPrincipalSino.jpg`, descricaoPt: 'Tela de Toque do Sino.', descricaoEn: 'Bell Touch Screen.' },
  { nome: `images/sinoweb/multiTela.jpg`, descricaoPt: 'Telas Mobile.', descricaoEn: 'Mobile Screens.' },
];

const imagesSisa = [
  { nome: `images/sisa/telaHome.jpg`, descricaoPt: 'Tela Home.', descricaoEn: 'Home Screen.' },
  { nome: `images/sisa/telaEntrada.jpg`, descricaoPt: 'Tela Registrar Entrada.', descricaoEn: 'Register Entry Screen.' },
  { nome: `images/sisa/telaProduto.jpg`, descricaoPt: 'Tela Produto.', descricaoEn: 'Product Screen.' },
  { nome: `images/sisa/telaFornecimento.jpg`, descricaoPt: 'Tela Fornecedor.', descricaoEn: 'Supplier Screen.' },
  { nome: `images/sisa/telaFornecedor.jpg`, descricaoPt: 'Tela Unidade de Fornecimento.', descricaoEn: 'Supply Unit Screen.' },
  { nome: `images/sisa/telaLog.jpg`, descricaoPt: 'Tela Logs do Sistema.', descricaoEn: 'System Logs Screen.' },
];

const imagesReunioes = [
  { nome: `images/reunioes/telaInicial.jpg`, descricaoPt: 'Tela Principal.', descricaoEn: 'Main Screen.' },
  { nome: `images/reunioes/agendarReunioes.jpg`, descricaoPt: 'Tela Agendar Reunião.', descricaoEn: 'Schedule Meeting Screen.' },
  { nome: `images/reunioes/telaLogin.jpg`, descricaoPt: 'Tela de Login.', descricaoEn: 'Login Screen.' },
  { nome: `images/reunioes/telaHome.jpg`, descricaoPt: 'Tela Home.', descricaoEn: 'Home Screen.' },
  { nome: `images/reunioes/minhasReunioes.jpg`, descricaoPt: 'Minhas Reuniões.', descricaoEn: 'My Meetings.' },
  { nome: `images/reunioes/modal.jpg`, descricaoPt: 'Modal de Visualização.', descricaoEn: 'View Modal.' },
];

const modalPt = {
  estop: { titulo: "ESTOP - Sistema de Gerenciamento de Estacionamento.", imagens: imagesEstop, link: 'https://wallace13.github.io/estop/', botao: 'Saiba Mais', },
  bugsmash: { titulo: "Bug Smash - Game de Matar Moscas.", imagens: imagesBugsmash, link: 'https://wallace13.github.io/dubSmash/', botao: 'Jogue Agora', },
  simcov: { titulo: "SIMCOV - Sistema Integrado de Monitoramento dos Casos de Covid.", imagens: imagesSimcov, link: 'https://www.youtube.com/watch?v=NiRESwtdaxA', botao: 'Saiba Mais', },
  sicopes: { titulo: "SICOPES - Sistema Integrado de Controle e Pesquisa de Satisfação.", imagens: imagesSicopes, link: 'https://youtu.be/MxYyR1G4cOE', botao: 'Saiba Mais', },
  sinoweb: { titulo: "SINO WEB - Sistema online de toques de sino de Quartel/Igreja", imagens: imagesSinoWeb, link: 'https://wallace13.github.io/SinoWeb/', botao: 'Saiba Mais', },
  reunioes: { titulo: "AG Reuniões - Sistema de Agendamento de Reuniões.", imagens: imagesReunioes, botao: 0, },
  sisa: { titulo: "SISA - Sistema Integrado de Suprimentos e Armazenagem", imagens: imagesSisa, link: 'https://github.com/wallace13/PROJETO_ESTOQUE/', botao: 'Saiba Mais', },
  dashboard: { titulo: "English Study Dashboard.", imagens: imagesDashboardEnglish, link: 'https://wallace13.github.io/EnglishDashboard/', botao: 'Teste Agora', }
};
const modalEn = {
  estop: {
    titulo: "ESTOP - Parking Management System.",
    imagens: imagesEstop,
    link: 'https://wallace13.github.io/estop/',
    botao: 'Learn More',
  },
  bugsmash: {
    titulo: "Bug Smash - Fly Swatting Game.",
    imagens: imagesBugsmash,
    link: 'https://wallace13.github.io/dubSmash/',
    botao: 'Play Now',
  },
  simcov: {
    titulo: "SIMCOV - Integrated Monitoring System for Covid Cases.",
    imagens: imagesSimcov,
    link: 'https://www.youtube.com/watch?v=NiRESwtdaxA',
    botao: 'Learn More',
  },
  sicopes: {
    titulo: "SICOPES - Integrated Satisfaction Control and Survey System.",
    imagens: imagesSicopes,
    link: 'https://youtu.be/MxYyR1G4cOE',
    botao: 'Learn More',
  },
  sinoweb: {
    titulo: "SINO WEB - Online Bell Ringing System for Barracks/Churches.",
    imagens: imagesSinoWeb,
    link: 'https://wallace13.github.io/SinoWeb/',
    botao: 'Learn More',
  },
  reunioes: {
    titulo: "AG Meetings - Meeting Scheduling System.",
    imagens: imagesReunioes,
    botao: 0,
  },
  sisa: { 
    titulo: "Integrated Supply and Storage System.", 
    imagens: imagesSisa, 
    botao: 'Learn More', 
  },
  dashboard: { 
    titulo: "English Study Dashboard.", 
    imagens: imagesDashboardEnglish, 
    botao: 'Test Now', 
  }
};
let modal = currentLang === 'pt' ? modalPt : modalEn;
let descricao = currentLang === 'pt' ? 'descricaoPt' : 'descricaoEn';

//Language
function setLanguage(lang) {
  currentLang = lang; // salva o idioma escolhido

  localStorage.setItem('siteLang', lang);

  currentLang = localStorage.getItem('siteLang') || 'en';
  modal = currentLang === 'pt' ? modalPt : modalEn; 
  descricao = currentLang === 'pt' ? 'descricaoPt' : 'descricaoEn';

  // Alternar visibilidade dos parágrafos
  document.querySelectorAll('[data-lang-en], [data-lang-pt]').forEach(el => {
    el.style.display = el.hasAttribute(`data-lang-${lang}`) ? 'block' : 'none';
  });

  document.querySelectorAll("[data-lang-en]").forEach(el => {
    const translatedText = el.getAttribute(`data-lang-${lang}`);
    if (translatedText) {
      el.textContent = translatedText;
    }
  });

  // Estilizar os botões
  document.getElementById("lang-en").style.fontWeight = lang === 'en' ? 'bold' : 'normal';
  document.getElementById("lang-pt").style.fontWeight = lang === 'pt' ? 'bold' : 'normal';
}

// Eventos dos botões de idioma
document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-pt").addEventListener("click", () => setLanguage("pt"));

// Define como inglês ao carregar
window.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});

var modalClick = document.getElementById('modal');
function criaSlide($this) {
  //cria a primeira div do carrossel
  let div = document.createElement('div');
  div.setAttribute('id', `carouselExampleControls`);
  div.setAttribute('class', `carousel slide`);
  div.setAttribute('data-ride', `carousel`);
  let buttons =
    `
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
</a>
`;
  div.innerHTML = buttons;
  document.getElementById('coluna1').appendChild(div);
  //cria a segunda div do carrossel
  let div2 = document.createElement('div');
  div2.setAttribute('class', `carousel-inner`);
  div2.setAttribute('id', `carrossel`);
  document.getElementById('carouselExampleControls').appendChild(div2);
  let index = 0;
  for (const image of modal[$this]['imagens']) {
    index++;
    let html =
      `
<img class="d-block w-100 img-thumbnail" src="${image['nome']}" alt="erro">
<figcaption class="figure-caption fs-4">${image[descricao]}</figcaption>
`;
    let div3 = document.createElement('div');
    div3.setAttribute('class', `carousel-item`);
    div3.setAttribute('id', `${index}`);
    div3.innerHTML = html;
    document.getElementById('carrossel').appendChild(div3);
  }
  document.getElementById("1").setAttribute('class', `carousel-item active`);
  $('carousel').carousel({
    interval: 5000,
    keyboard: true
  });
}

function criaImagens($this) {
  let index = 0;
  for (const image of modal[$this]['imagens']) {
    index++;
    let html =
      `<figure class="figure">
      <img class="img-thumbnail" src="${image['nome']}" alt="erro">
      <figcaption class="figure-caption">${image[descricao]}</figcaption>
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

function criaBotao() {
  let botao = document.createElement('a');
  botao.setAttribute('target', `_blank`);
  botao.setAttribute('class', `btn btn-primary`);
  botao.setAttribute('id', `rodape`);
  document.getElementById('botao').appendChild(botao);
}

function criaModal($this) {
  if (titulo.innerText == "") {
    titulo.appendChild(document.createTextNode(modal[$this]['titulo']));
    if (screen.width < 900) {
      criaSlide($this);
    } else {
      criaImagens($this);
    }
    if (modal[$this]['botao'] != "0") {
      criaBotao();
      rodape.setAttribute('href', modal[$this]['link']);
      rodape.appendChild(document.createTextNode(modal[$this]['botao']));
    }
  } else {
    titulo.innerText = modal[$this]['titulo'];
    if (screen.width < 900) {
      criaSlide($this);
    } else {
      criaImagens($this);
    }
    if (modal[$this]['botao'] != "0") {
      criaBotao();
      rodape.innerText = modal[$this]['botao'];
      rodape.setAttribute('href', modal[$this]['link']);
    }
  }
}
function limpaModal() {
  var count = document.getElementsByTagName('figure').length;
  let i = 1;
  while (i <= count) { const img = document.querySelector(`#imagens${i}`); if (img.parentNode) { img.parentNode.removeChild(img); } i++; }
  const slide = document.querySelector(`#carouselExampleControls`);
  if (document.getElementById("carouselExampleControls")) { if (slide.parentNode) { slide.parentNode.removeChild(slide); } }
  const botao = document.querySelector(`#rodape`);
  if (document.getElementById("rodape")) { if (botao.parentNode) { botao.parentNode.removeChild(botao); } }
}
modalClick.addEventListener('click', function (e) { if (e.target == this) limpaModal(); });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Habilita o loop infinito
    margin: 10, // Define a margem entre os itens
    nav: false, // Habilita os botões de navegação (setas)
    dots: false, // Desabilita os pontos indicadores de navegação (dots)
    autoplay: true, // Ativa o autoplay do carrossel
    autoplayTimeout: 2000, // Define o intervalo de tempo entre os slides (em milissegundos)
    autoplayHoverPause: true, // Pausa o autoplay quando o cursor está sobre o carrossel
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1 // Quantidade de itens exibidos em telas menores
      },
      600: {
        items: 3 // Quantidade de itens exibidos em telas de 600px ou mais
      },
      1000: {
        items: 5 // Quantidade de itens exibidos em telas de 1000px ou mais
      }
    }
  });
});

const languageSelector = document.getElementById('language-selector');
const modalElement = document.getElementById('modal');

modalElement.addEventListener('show.bs.modal', () => {
  // Esconde o seletor de idioma quando o modal abrir
  languageSelector.style.display = 'none';
});

modalElement.addEventListener('hidden.bs.modal', () => {
  // Mostra o seletor de idioma quando o modal fechar
  languageSelector.style.display = 'block';
});
