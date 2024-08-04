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

  document.getElementById('name').addEventListener('click', function() {
    var audio = new Audio('/ersin-kiymaz.mp3');
    audio.play();
});