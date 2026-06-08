// Agro Forte - Futuro Sustentável
// p5.js
// Objetivo: Este código ilustra a importância da agricultura sustentável,
// promovendo energia limpa (solar e eólica), preservação da vegetação
// e equilíbrio entre produção agrícola e cuidado com o meio ambiente.

function setup() {
  createCanvas(800, 500);
}

function draw() {
  
  // Céu
  background(120, 200, 255);
  
  // Sol
  fill(255, 220, 0);
  ellipse(700, 80, 80);

  // Campo
  fill(80, 180, 80);
  rect(0, 300, 800, 200);

  // Plantação
  stroke(40, 120, 40);
  for (let i = 0; i < 800; i += 25) {
    line(i, 300, i, 500);
  }

  // Árvore
  noStroke();
  fill(120, 70, 20);
  rect(100, 220, 30, 80);

  fill(40, 150, 50);
  ellipse(115, 200, 90);

  // Fazenda
  fill(200, 70, 60);
  rect(300, 220, 120, 80);

  fill(100, 50, 30);
  triangle(290, 220, 360, 160, 430, 220);

  // Painel solar
  fill(40, 70, 140);
  rect(550, 260, 100, 40);

  // Turbina eólica
  stroke(220);
  strokeWeight(5);
  line(700, 180, 700, 300);

  push();
  translate(700, 180);
  rotate(frameCount * 0.03);

  line(0, 0, 40, 0);
  line(0, 0, -20, 35);
  line(0, 0, -20, -35);
  pop();

  // Texto
  noStroke();
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("AGRO FORTE", 400, 50);

  textSize(18);
  text("Futuro Sustentável", 400, 80);
}

// AGRO FORTE - JOGO SUSTENTÁVEL
// Use as setas ← → ↑ ↓ para mover o agricultor

let jogador;
let semente;
let pontos = 0;

function setup() {
  createCanvas(800, 500);

  jogador = {
    x: 400,
    y: 400,
    tamanho: 30
  };

  novaSemente();
}

function draw() {

  // Céu
  background(120, 200, 255);

  // Sol
  fill(255, 220, 0);
  ellipse(700, 80, 80);

  // Campo
  fill(80, 180, 80);
  rect(0, 300, width, 200);

  // Plantação
  stroke(40, 120, 40);
  for (let i = 0; i < width; i += 25) {
    line(i, 300, i, height);
  }

  // Árvore
  noStroke();
  fill(120, 70, 20);
  rect(100, 220, 30, 80);

  fill(40, 150, 50);
  ellipse(115, 200, 90);

  // Fazenda
  fill(200, 70, 60);
  rect(300, 220, 120, 80);

  fill(100, 50, 30);
  triangle(290, 220, 360, 160, 430, 220);

  // Painel solar
  fill(40, 70, 140);
  rect(550, 260, 100, 40);

  // Turbina eólica
  stroke(220);
  strokeWeight(5);
  line(700, 180, 700, 300);

  push();
  translate(700, 180);
  rotate(frameCount * 0.03);

  line(0, 0, 40, 0);
  line(0, 0, -20, 35);
  line(0, 0, -20, -35);
  pop();

  // Movimento do jogador
  if (keyIsDown(LEFT_ARROW)) jogador.x -= 4;
  if (keyIsDown(RIGHT_ARROW)) jogador.x += 4;
  if (keyIsDown(UP_ARROW)) jogador.y -= 4;
  if (keyIsDown(DOWN_ARROW)) jogador.y += 4;

  jogador.x = constrain(jogador.x, 0, width);
  jogador.y = constrain(jogador.y, 0, height);

  // Semente
  noStroke();
  fill(255, 200, 0);
  ellipse(semente.x, semente.y, 20);

  fill(0);
  ellipse(semente.x - 3, semente.y, 3);
  ellipse(semente.x + 3, semente.y, 3);

  // Jogador (agricultor)
  fill(0, 100, 255);
  ellipse(jogador.x, jogador.y, jogador.tamanho);

  // Colisão
  let distancia = dist(
    jogador.x,
    jogador.y,
    semente.x,
    semente.y
  );

  if (distancia < 25) {
    pontos++;
    novaSemente();
  }

  // Título
  fill(255);
  textAlign(CENTER);
  textSize(28);
  text("AGRO FORTE", width / 2, 40);

  textSize(18);
  text("Colete sementes para um futuro sustentável!", width / 2, 70);

  // Pontuação
  fill(0);
  textSize(22);
  textAlign(LEFT);
  text("Pontos: " + pontos, 20, 40);

  // Vitória
  if (pontos >= 10) {
    fill(0, 150, 0);
    textSize(36);
    textAlign(CENTER);
    text("🌱 FAZENDA SUSTENTÁVEL CONSTRUÍDA! 🌱", width / 2, 140);
    noLoop();
  }
}

function novaSemente() {
  semente = {
    x: random(50, 750),
    y: random(320, 470)
  };
}
