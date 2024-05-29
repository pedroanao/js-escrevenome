//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;
let raqueteComprimento = 10;
let raqueteAltura = 100;

//variaveis da raquete
let xRaquete = 1;
let yRaquete = 150;

//variavel do oponente
let xRaqueteOponente = 589;
let yRaqueteOponente = 160;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600,400);
  trilha.loop();
}

function draw(){
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
      xBolinha -raio <0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||  
      yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
}
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}

function verificaColisaoRaquete(){
  if (xBolinha < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
    }
  }
  
function verificaColisaoRaquete(x, y){
  colidiu=
  collideRectCircle(x, y, raqueteComprimento,raqueteAltura, xBolinha,yBolinha,raio);
  if (colidiu){
  velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
   yRaqueteOponente -= 10;
 }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(0, 25, 254)
  rect(150, 10, 40, 20);
   fill(255);
text(meusPontos, 170, 26);
  fill(250, 24, 1)
  rect(450, 10, 40, 20);
   fill(255);
  text(pontosDoOponente, 470,26);
} 

function marcaPonto(){
  if (xBolinha > 590){
  meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
  pontosDoOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
if (pontosDoOponente >= meusPontos) {
  chanceDeErrar += 1 
  if(chanceDeErrar >= 39) {
    chanceDeErrar = 40
  }
} else {
  chanceDeErrar -= 1
  if(chanceDeErar <=35){
    chanceDeErrar =35
  }
}
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
    xBolinha = 23
  }
}
