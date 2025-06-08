// Guilherme Nelas nº3220534
// Exercicio de Avaliação: Portfolio
// 3º ano 2024/2025
// Semestre 2º
// Laboratório de Projeto II
// Design Gráfico e Multimedia
// Escola superior de Artes e Design Caldas Da Rainha (ESAD.CR)
// 08/06/2025

// footer-clock.js

// Espera que a página carregue totalmente antes de correr o script
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('current-time');     // Vai buscar o elemento do HTML onde vai aparecer a hora
   // Se não encontrar o elemento, sai da função (evita erros)  
    if (!timeElement) return;
    // Atualiza o relógio com a hora atual
    const updateClock = () => {
      const options = {
        timeZone: 'Europe/Lisbon', // Define o fuso horário para Lisboa
        hour12: false,
        hour: '2-digit', //formato
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
      
      const now = new Date(); // Cria a data/hora atual
      timeElement.textContent = now.toLocaleTimeString('pt-PT', options);
    }; // Converte a hora para string formatada em português (pt-PT)
    
    updateClock(); // Atualiza o relógio assim que a página abre
    setInterval(updateClock, 1000); // Atualiza o relógio de 1 em 1 segundo (tempo real)
  });