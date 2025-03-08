function slideRandom(button) {
     const maxX = window.innerWidth - button.offsetWidth;
     const maxY = window.innerHeight - button.offsetHeight;
 
     const randomX = Math.random() * maxX;
     const randomY = Math.random() * maxY;
 
     // Ensure it doesn't go outside the visible area
     button.style.left = `${Math.max(0, randomX)}px`;
     button.style.top = `${Math.max(0, randomY)}px`;
 }