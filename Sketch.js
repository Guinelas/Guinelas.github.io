// Guilherme Nelas nº3220534
// Exercicio de Avaliação: Portfolio
// 3º ano 2024/2025
// Semestre 2º
// Laboratório de Projeto II
// Design Gráfico e Multimedia
// Escola superior de Artes e Design Caldas Da Rainha (ESAD.CR)
// 08/06/2025

let cursor_delay_element, cursor_element;
let current_x, current_y;
let target_x, target_y;


function setup() {
    noCanvas(); // Não preciso do canvas 

    cursor_delay_element = select("#meu_cursor_delay");
    cursor_element = select("#meu_cursor");

    cursor_delay_element.show(); // Mostra a div do cursor com delay
    cursor_element.show(); // Mostra a div do cursor principal

    current_x = mouseX;
    current_y = mouseY;
}


function draw() {
    const w_delay = 60; // width do cursor com delay
    const h_delay = 60; // height do mesmo
    cursor_delay_element.size(w_delay, h_delay);
    cursor_delay_element.style("border-radius", w_delay / 2 + "px"); // O CSS já faz isso, mas aqui reforça

    target_x = mouseX;
    target_y = mouseY;

    const lerpAmount = 0.15; // Menos delay (mais rápido)
    current_x = lerp(current_x, target_x, lerpAmount);
    current_y = lerp(current_y, target_y, lerpAmount);

    cursor_delay_element.position(current_x - w_delay / 2, current_y - h_delay / 2, "fixed");


    const w = 15; // Tamanho do cursor principal
    const h = 15;
    cursor_element.size(w, h);
    cursor_element.style("border-radius", w / 2 + "px"); // O CSS já faz isso, mas aqui reforça
    cursor_element.position(target_x - w / 2, target_y - h / 2, "fixed");
}