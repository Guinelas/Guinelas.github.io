let scrollAmount = window.scrollY || 0;
let targetScroll = scrollAmount;
let isScrolling = false;

window.addEventListener('wheel', function(event) {
  event.preventDefault(); // Bloqueia o scroll padrão

  targetScroll += event.deltaY;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));

  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });

function smoothScroll() {
  scrollAmount += (targetScroll - scrollAmount) * 0.05; // Quanto menor, mais suave

  window.scrollTo(0, scrollAmount);

  if (Math.abs(scrollAmount - targetScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    scrollAmount = targetScroll; // Garante precisão
    window.scrollTo(0, scrollAmount);
    isScrolling = false;
  }
}
