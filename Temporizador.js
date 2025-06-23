(function () {
  const container = document.createElement('div');
  container.id = 'custom-countdown';
  container.style = 'font-family: Arial; font-size: 24px; color: #444; text-align:center; margin: 20px;';
  document.body.appendChild(container);

  // FECHA Y HORA: 26 de julio de 2025, 5:30 PM (hora local del navegador)
  const targetDate = new Date('2025-07-26T17:30:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      container.innerHTML = '¡Ya comenzó el evento!';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    container.innerHTML = `Faltan ${d} días, ${h} horas, ${m} minutos y ${s} segundos.`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
