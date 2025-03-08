let count=0;
let img=document.querySelector(".img")
let btn=document.querySelector(".sliding-btn")
console.log(btn);






function slideRandom(button) {
     const maxX = window.innerWidth - button.offsetWidth;
     const maxY = window.innerHeight - button.offsetHeight;
 
     const randomX = Math.random() * maxX;
     const randomY = Math.random() * maxY;
 
     // Ensure it doesn't go outside the visible area
     button.style.left = `${Math.max(0, randomX)}px`;
     button.style.top = `${Math.max(0, randomY)}px`;

   
     
 };
function cake(){
count++    
switch (count) {
case 1:
   
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Awww Cake khayeggi jaa naa </p>`
    
    
    break
case 2:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Smjh naa arri madam ni milra Cake 🎂</p>`
    break
case 3:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> aeee jaa ree tu gu kha hat </p>`
    break
case 4:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Matlab Manegi ni tu </p>`
    break
case 5:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Sahi pitati hai Ladkiya  </p>`
    break
case 6:
   img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Le Button hi hata di  </p>`
    btn.remove()
    break

    }
  
}
