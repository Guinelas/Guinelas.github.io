/* let x = 0;
let y = 0;
let isHovering = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let canvas = document.querySelector('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1000';
}

function draw() {
  clear(); // transparente
  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.15);

  noStroke();
  if (isHovering) {
    fill(0);
    ellipse(x, y, 100);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("View Project", x, y);
  } else {
    fill(0, 100);
    ellipse(x, y, 20);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Hover detection fora do p5
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.project-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHovering = true;
    });
    link.addEventListener('mouseleave', () => {
      isHovering = false;
    });
  });
}); */

let x = 0;
let y = 0;
let isHovering = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let canvas = document.querySelector('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1000';
}

function draw() {
  clear(); // Transparente
  x = lerp(x, mouseX, 0.15); // Valor menor para suavizar o movimento
  y = lerp(y, mouseY, 0.15); // Valor menor para suavizar o movimento

  noFill();
  strokeWeight(2);
  blendMode(DIFFERENCE); // Efeito de inversão de cores

  if (isHovering) {
    stroke(0); // Preto
    ellipse(x, y, 50); // Círculo maior no hover
    fill (255); // Branco
    blendMode(DIFFERENCE);
  } else {
    stroke(0, 255); // Preto com opacidade
    ellipse(x, y, 25); // Círculo menor fora do hover
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Hover detection fora do p5
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.project-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHovering = true;
    });
    link.addEventListener('mouseleave', () => {
      isHovering = false;
    });
  });
});

