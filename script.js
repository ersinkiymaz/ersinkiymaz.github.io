document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid a');
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
  
    gridItems.forEach(item => {
      const img = item.querySelector('img');
      const altText = img ? img.alt : '';
  
      item.addEventListener('mousemove', (e) => {
        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;
  
        tooltip.textContent = altText;
        tooltip.style.left = `${x + 10}px`;
        tooltip.style.top = `${y + 10}px`;
        tooltip.style.opacity = '1';
      });
  
      item.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    });
  });





  document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code for tooltips here)

    // Add sound play functionality
    const playButton = document.getElementById('playSound');
    playButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default button behavior
        console.log('Play button clicked');
        const audio = new Audio('/ersin-kiymaz.mp3');
        audio.play().then(() => {
            console.log('Audio started playing');
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });
    });
});