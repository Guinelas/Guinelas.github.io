// footer-clock.js
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('current-time');
    
    if (!timeElement) return;
    
    const updateClock = () => {
      const options = {
        timeZone: 'Europe/Lisbon',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
      
      const now = new Date();
      timeElement.textContent = now.toLocaleTimeString('pt-PT', options);
    };
    
    updateClock();
    setInterval(updateClock, 1000);
  });