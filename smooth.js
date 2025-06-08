// Guilherme Nelas nº3220534
// Exercicio de Avaliação: Portfolio
// 3º ano 2024/2025
// Semestre 2º
// Laboratório de Projeto II
// Design Gráfico e Multimedia
// Escola superior de Artes e Design Caldas Da Rainha (ESAD.CR)
// 08/06/2025

let scrollAmount = window.scrollY || 0; // Guarda a posição onde a página está agora
let targetScroll = scrollAmount; // Guarda para onde queremos que o scroll vá
let isScrolling = false; // Serve para sabermos se o scroll está a acontecer ou não

window.addEventListener('wheel', function(event) { // Quando se dá scroll com o rato
  event.preventDefault();  // Tira o scroll normal do browser
  targetScroll += event.deltaY;
  
// Faz com que não passa do topo nem do fundo da página
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
  
  if (!isScrolling) {   // Se ainda não está a fazer scroll, começa a animação
    isScrolling = true;
    requestAnimationFrame(smoothScroll); // Chama a função para o scroll
  } 
}, { passive: false }); // define como não passivo para permitir preventDefault

function smoothScroll() { // scroll vá devagarinho até ao destino
  scrollAmount += (targetScroll - scrollAmount) * 0.09; // Aproxima o scroll atual do destino
  window.scrollTo(0, scrollAmount); // Manda a página mexer-se até a próxima posição

  if (Math.abs(scrollAmount - targetScroll) > 0.5) {  // Se ainda falta andar um pouco, continua
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false; // Quando chega, diz que já não está a fazer scroll
  }
}